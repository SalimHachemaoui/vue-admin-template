<template>
    <div class="row">
        <div class="col">
            <h2>Options</h2>
            <div class="option">
                <div class="col">
                <b-form-checkbox id="use-datachannel" ref="UseDatachannel" v-model="status" value="true"
      unchecked-value="null" name="checkbox-1">
                    Use datachannel
                </b-form-checkbox>
                </div>
                <label for="use-datachannel"></label>
                <b-form-select v-model="selected" :options="options"></b-form-select>
                <select id="datachannel-parameters" ref="DatachannelParameters">
                    <option value='{"ordered": true}'>Ordered, reliable</option>
                    <option value='{"ordered": false, "maxRetransmits": 0}'>Unordered, no retransmissions</option>
                    <option value='{"ordered": false, "maxPacketLifetime": 500}'>Unordered, 500ms lifetime</option>
                </select>
            </div>
            <div class="option">
                <input id="use-audio" ref="UseAudio" type="checkbox" />
                <label for="use-audio">Use audio</label>
                <select id="audio-codec" ref="AudioCodec">
                    <option value="default" selected>Default codecs</option>
                    <option value="opus/48000/2">Opus</option>
                    <option value="PCMU/8000">PCMU</option>
                    <option value="PCMA/8000">PCMA</option>
                </select>
            </div>
            <div class="option">
                <input id="use-video" ref="UseVideo" type="checkbox" checked="checked" />
                <label for="use-video">Use video</label>
                <select id="video-resolution" ref="VideoResolution">
                    <option value="80x80" selected>Default resolution</option>
                    <option value="320x240">320x240</option>
                    <option value="640x480">640x480</option>
                    <option value="960x540">960x540</option>
                    <option value="1280x720">1280x720</option>
                </select>
                <select id="video-transform" ref="VideoTransform">
                    <option value="cv" selected>No transform</option>
                    <option value="edges">Edge detection</option>
                    <option value="cartoon">Cartoon effect</option>
                    <option value="rotate">Rotate</option>
                    <option value="cv">CVlib eyes and smile detection</option>
                    <option value="object">CVlib object detection</option>
                    <option value="mobilenet">mobilenet object detection</option>
                    <option value="gender">CVlib gender detection</option>


                </select>
                <select id="video-codec" ref="VideoCodec">
                    <option value="default" selected>Default codecs</option>
                    <option value="VP8/90000">VP8</option>
                    <option value="H264/90000">H264</option>
                </select>
            </div>
            <div class="option">
                <input id="use-stun" ref="UseStun" type="checkbox" checked="checked" />
                <label for="use-stun">Use STUN server</label>
            </div>
            <b-button variant="success" id="start" ref="Start" @click="starte">Start</b-button>
            <b-button variant="danger" id="stop" ref="Stop" style="display: none" @click="stope">Stop</b-button>
        </div>
        <div class="col">
            <h2>State</h2>
            <p>
                ICE gathering state: <span id="IceGatheringState" ref="IceGatheringState"></span>
            </p>
            <p>
                ICE connection state: <span id="IceConnectionState" ref="IceConnectionState"></span>
            </p>
            <p>
                Signaling state: <span id="SignalingState" ref="SignalingState"></span>
            </p>
        </div>
        <div class="col">
            <div id="media" ref="Media" style="display: none">
                <h2>Media</h2>

                <audio id="audio" ref="Audio" autoplay="true"></audio>
                <video id="video" ref="Video" autoplay="true" playsinline="true" controls></video>
            </div>
        </div>
        <div class="col">
            <h2>Data channel</h2>
            <pre id="DataChannel" ref="DataChannel" style="height: 200px;"></pre>

            <h2>SDP</h2>

            <h3>Offer</h3>
            <pre id="offer-sdp" ref="OfferSdp"></pre>

            <h3>Answer</h3>
            <pre id="answer-sdp" ref="AnswerSdp"></pre>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LiveDetector2',
    props: {
        msg: String
    },
    data() {
        return {
            options:[
            { value: null, text: 'Please select an option' },
          { value: {"ordered": true}, text: 'Ordered, reliable' },
          { value: {"ordered": false, "maxRetransmits": 0}, text: 'Unordered, no retransmissions' },
          { value: {"ordered": false, "maxPacketLifetime": 500}, text: 'Unordered, 500ms lifetime' },
        ],
        selected : null,
        status: true,
            dataChannelLog: null,
            iceConnectionLog: null,
            iceGatheringLog: null,
            signalingLog: null,
            pc: null, dc: null,
            dcInterval: null,
        }
    },
    methods: {
        createPeerConnection() {
            var config = {
                sdpSemantics: 'unified-plan'
            };

            if (this.$refs.UseStun.checked) {
                config.iceServers = [{ urls: ['stun:stun.l.google.com:19302'] }];
            }

            this.pc = new RTCPeerConnection(config);

            // register some listeners to help debugging
            this.pc.addEventListener('icegatheringstatechange', () => {
                this.iceGatheringLog.textContent += ' -> ' + this.pc.iceGatheringState;
            }, false);
            this.iceGatheringLog.textContent = this.pc.iceGatheringState;

            this.pc.addEventListener('iceconnectionstatechange', () => {
                this.iceConnectionLog.textContent += ' -> ' + this.pc.iceConnectionState;
            }, false);
            this.iceConnectionLog.textContent = this.pc.iceConnectionState;

            this.pc.addEventListener('signalingstatechange', () => {
                this.signalingLog.textContent += ' -> ' + this.pc.signalingState;
            }, false);
            this.signalingLog.textContent = this.pc.signalingState;

            // connect audio / video
            this.pc.addEventListener('track', (evt) => {
                if (evt.track.kind == 'video')
                    this.$refs.Video.srcObject = evt.streams[0];
                else
                    this.$refs.Audio.srcObject = evt.streams[0];
            });

            return this.pc;
        },
        negotiate() {
            return this.pc.createOffer().then((offer) => {
                return this.pc.setLocalDescription(offer);
            }).then(() => {
                // wait for ICE gathering to complete
                return new Promise((resolve) => {
                    if (this.pc.iceGatheringState === 'complete') {
                        resolve();
                    } else {
                        // eslint-disable-next-line no-inner-declarations
                        const checkState = () => {
                            if (this.pc.iceGatheringState === 'complete') {
                                this.pc.removeEventListener('icegatheringstatechange', checkState);
                                resolve();
                            }
                        }
                        this.pc.addEventListener('icegatheringstatechange', checkState);
                    }
                });
            }).then(() => {
                var offer = this.pc.localDescription;
                var codec;

                codec = this.$refs.AudioCodec.value;
                if (codec !== 'default') {
                    offer.sdp = this.sdpFilterCodec('audio', codec, offer.sdp);
                }

                codec = this.$refs.VideoCodec.value;
                if (codec !== 'default') {
                    offer.sdp = this.sdpFilterCodec('video', codec, offer.sdp);
                }
                console.log(this.$refs.VideoTransform.value);
                this.$refs.OfferSdp.textContent = offer.sdp;
                return fetch('http://10.105.248.18:8088/offer_cv', {
                    body: JSON.stringify({
                        sdp: offer.sdp,
                        type: offer.type,
                        video_transform: this.$refs.VideoTransform.value
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST'
                });
            }).then((response) => {
                return response.json();
            }).then((answer) => {
                this.$refs.AnswerSdp.textContent = answer.sdp;
                return this.pc.setRemoteDescription(answer);
            }).catch((e) => {
                alert(e);
            });
        },

        starte() {

            this.$refs.Start.style.display = 'none';

            this.pc = this.createPeerConnection();

            var time_start = null;

            const current_stamp = () => {
                if (time_start === null) {
                    time_start = new Date().getTime();
                    return 0;
                } else {
                    return new Date().getTime() - time_start;
                }
            }

            if (this.$refs.UseDatachannel.checked) {
                var parameters = JSON.parse(this.$refs.DatachannelParameters.value);

                this.dc = this.pc.createDataChannel('chat', parameters);
                this.dc.onclose = () => {
                    clearInterval(this.dcInterval);
                    this.dataChannelLog.textContent += '- close\n';
                };
                this.dc.onopen = () => {
                    this.dataChannelLog.textContent += '- open\n';
                    this.dcInterval = setInterval(() => {
                        var message = 'ping ' + current_stamp();
                        this.dataChannelLog.textContent += '> ' + message + '\n';
                        this.dc.send(message);
                    }, 1000);
                };
                this.dc.onmessage = (evt) => {
                    this.dataChannelLog.textContent += '< ' + evt.data + '\n';

                    if (evt.data.substring(0, 4) === 'pong') {
                        var elapsed_ms = current_stamp() - parseInt(evt.data.substring(5), 10);
                        this.dataChannelLog.textContent += ' RTT ' + elapsed_ms + ' ms\n';
                    }
                };
            }

            var constraints = {
                audio: this.$refs.UseAudio.checked,
                video: false
            };

            if (this.$refs.UseVideo.checked) {
                var resolution = this.$refs.VideoResolution.value;
                if (resolution) {
                    resolution = resolution.split('x');
                    constraints.video = {
                        width: parseInt(resolution[0], 0),
                        height: parseInt(resolution[1], 0)
                    };
                } else {
                    constraints.video = true;
                }
            }

            if (constraints.audio || constraints.video) {
                if (constraints.video) {
                    this.$refs.Media.style.display = 'block';
                }
                navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
                    stream.getTracks().forEach((track) => {
                        this.pc.addTrack(track, stream);
                    });
                    return this.negotiate();
                }, (err) => {
                    alert('Could not acquire media: ' + err);
                });
            } else {
                this.negotiate();
            }

            this.$refs.Stop.style.display = 'inline-block';
        },
        stope() {
            this.$refs.Stop.style.display = 'none';
            this.$refs.Start.style.display = 'inline-block';
            // close data channel
            if (this.dc) {
                this.dc.close();
            }

            // close transceivers
            if (this.pc.getTransceivers) {
                this.pc.getTransceivers().forEach((transceiver) => {
                    if (transceiver.stop) {
                        transceiver.stop();
                    }
                });
            }

            // close local audio / video
            this.pc.getSenders().forEach((sender) => {
                sender.track.stop();
            });

            // close peer connection
            setTimeout(() => {
                this.pc.close();
            }, 500);
        },
        sdpFilterCodec(kind, codec, realSdp) {
            var allowed = []
            // eslint-disable-next-line no-control-regex
            var rtxRegex = new RegExp('a=fmtp:(\\d+) apt=(\\d+)\r$');
            var codecRegex = new RegExp('a=rtpmap:([0-9]+) ' + this.escapeRegExp(codec))
            var videoRegex = new RegExp('(m=' + kind + ' .*?)( ([0-9]+))*\\s*$')

            var lines = realSdp.split('\n');

            var isKind = false;
            for (var i = 0; i < lines.length; i++) {
                if (lines[i].startsWith('m=' + kind + ' ')) {
                    isKind = true;
                } else if (lines[i].startsWith('m=')) {
                    isKind = false;
                }

                if (isKind) {
                    var match = lines[i].match(codecRegex);
                    if (match) {
                        allowed.push(parseInt(match[1]));
                    }

                    match = lines[i].match(rtxRegex);
                    if (match && allowed.includes(parseInt(match[2]))) {
                        allowed.push(parseInt(match[1]));
                    }
                }
            }

            var skipRegex = 'a=(fmtp|rtcp-fb|rtpmap):([0-9]+)';
            var sdp = '';

            isKind = false;
            // eslint-disable-next-line no-redeclare
            for (var i = 0; i < lines.length; i++) {
                if (lines[i].startsWith('m=' + kind + ' ')) {
                    isKind = true;
                } else if (lines[i].startsWith('m=')) {
                    isKind = false;
                }

                if (isKind) {
                    var skipMatch = lines[i].match(skipRegex);
                    if (skipMatch && !allowed.includes(parseInt(skipMatch[2]))) {
                        continue;
                    } else if (lines[i].match(videoRegex)) {
                        sdp += lines[i].replace(videoRegex, '$1 ' + allowed.join(' ')) + '\n';
                    } else {
                        sdp += lines[i] + '\n';
                    }
                } else {
                    sdp += lines[i] + '\n';
                }
            }

            return sdp;
        },
        escapeRegExp(string) {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
        }
    },
    created() {
        console.log('created hook called', this.msg);
        console.log(this.$refs.Start);
    },
    mounted() {
        this.dataChannelLog = this.$refs.DataChannel,
            this.iceConnectionLog = this.$refs.IceConnectionState,
            this.iceGatheringLog = this.$refs.IceGatheringState,
            this.signalingLog = this.$refs.SignalingState,
            console.log(this.dataChannelLog);
        console.log(this.iceConnectionLog);
        console.log(this.iceGatheringLog);
        console.log(this.signalingLog);
    },



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
    padding: 8px 16px;
}

pre {
    overflow-x: hidden;
    overflow-y: auto;
}

video {
    width: 100%;
}

.option {
    margin-bottom: 8px;
}

#media {
    max-width: 1280px;
}
</style>
