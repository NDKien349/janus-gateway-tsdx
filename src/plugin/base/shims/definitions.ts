import Promise from 'bluebird';

export interface MediaDevices {
  getUserMedia: (constants: MediaStreamConstraints) => Promise<MediaStream>;
}

export interface WebRTC {
  newRTCPeerConnection: (config, constraints) => RTCPeerConnection;
  newRTCSessionDescription: (jsep: RTCSessionDescription) => RTCSessionDescription;
  newRTCIceCandidate: (candidate: RTCIceCandidate) => RTCIceCandidate;
}
