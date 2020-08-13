export const knownPureFunctionsNames = [
  'Math.abs',
  'Math.acos',
  'Math.acosh',
  'Math.asin',
  'Math.asinh',
  'Math.atan',
  'Math.atanh',
  'Math.atan2',
  'Math.ceil',
  'Math.cbrt',
  'Math.expm1',
  'Math.clz32',
  'Math.cos',
  'Math.cosh',
  'Math.exp',
  'Math.floor',
  'Math.fround',
  'Math.hypot',
  'Math.imul',
  'Math.log',
  'Math.log1p',
  'Math.log2',
  'Math.log10',
  'Math.max',
  'Math.min',
  'Math.pow',
  'Math.random',
  'Math.round',
  'Math.sign',
  'Math.sin',
  'Math.sinh',
  'Math.sqrt',
  'Math.tan',
  'Math.tanh',
  'Math.trunc',
  'Object.getOwnPropertyDescriptor',
  'Object.getOwnPropertyDescriptors',
  'Object.getOwnPropertyNames',
  'Object.getOwnPropertySymbols',
  'Object.is',
  'Object.create',
  'Object.getPrototypeOf',
  'Object.isExtensible',
  'Object.isFrozen',
  'Object.isSealed',
  'Object.keys',
  'Object.entries',
  'Object.fromEntries',
  'Object.values',
  'Reflect.apply',
  'Reflect.get',
  'Reflect.getOwnPropertyDescriptor',
  'Reflect.has',
  'Reflect.isExtensible',
  'Reflect.ownKeys'
]

export const knownBrowserGlobals = new Set([
  'console',
  'Object',
  'Function',
  'Array',
  'Number',
  'parseFloat',
  'parseInt',
  'Boolean',
  'String',
  'Symbol',
  'Date',
  'Promise',
  'RegExp',
  'Error',
  'EvalError',
  'RangeError',
  'ReferenceError',
  'SyntaxError',
  'TypeError',
  'URIError',
  'JSON',
  'Math',
  'Intl',
  'ArrayBuffer',
  'Uint8Array',
  'Int8Array',
  'Uint16Array',
  'Int16Array',
  'Uint32Array',
  'Int32Array',
  'Float32Array',
  'Float64Array',
  'Uint8ClampedArray',
  'BigUint64Array',
  'BigInt64Array',
  'DataView',
  'Map',
  'BigInt',
  'Set',
  'WeakMap',
  'WeakSet',
  'Proxy',
  'Reflect',
  'decodeURI',
  'decodeURIComponent',
  'encodeURI',
  'encodeURIComponent',
  'escape',
  'unescape',
  'eval',
  'isFinite',
  'isNaN',
  'ByteLengthQueuingStrategy',
  'CountQueuingStrategy',
  'webkitRTCPeerConnection',
  'webkitMediaStream',
  'WebSocket',
  'WebGLVertexArrayObject',
  'WebGLUniformLocation',
  'WebGLTransformFeedback',
  'WebGLTexture',
  'WebGLSync',
  'WebGLShaderPrecisionFormat',
  'WebGLShader',
  'WebGLSampler',
  'WebGLRenderingContext',
  'WebGLRenderbuffer',
  'WebGLQuery',
  'WebGLProgram',
  'WebGLFramebuffer',
  'WebGLContextEvent',
  'WebGLBuffer',
  'WebGLActiveInfo',
  'WebGL2RenderingContext',
  'WaveShaperNode',
  'TextEncoderStream',
  'TextEncoder',
  'TextDecoderStream',
  'TextDecoder',
  'SyncManager',
  'SubtleCrypto',
  'StorageEvent',
  'Storage',
  'StereoPannerNode',
  'SourceBufferList',
  'SourceBuffer',
  'ScriptProcessorNode',
  'ScreenOrientation',
  'RTCTrackEvent',
  'RTCStatsReport',
  'RTCSessionDescription',
  'RTCRtpTransceiver',
  'RTCRtpSender',
  'RTCRtpReceiver',
  'RTCPeerConnectionIceEvent',
  'RTCPeerConnection',
  'RTCIceCandidate',
  'RTCErrorEvent',
  'RTCError',
  'RTCDataChannelEvent',
  'RTCDataChannel',
  'RTCDTMFToneChangeEvent',
  'RTCDTMFSender',
  'RTCCertificate',
  'Plugin',
  'PluginArray',
  'PhotoCapabilities',
  'PeriodicWave',
  'Path2D',
  'PannerNode',
  'OverconstrainedError',
  'OscillatorNode',
  'OffscreenCanvasRenderingContext2D',
  'OfflineAudioContext',
  'OfflineAudioCompletionEvent',
  'NetworkInformation',
  'MimeType',
  'MimeTypeArray',
  'MediaStreamTrackEvent',
  'MediaStreamTrack',
  'MediaStreamEvent',
  'MediaStream',
  'MediaStreamAudioSourceNode',
  'MediaStreamAudioDestinationNode',
  'MediaSource',
  'MediaSettingsRange',
  'MediaRecorder',
  'MediaEncryptedEvent',
  'MediaElementAudioSourceNode',
  'MediaCapabilities',
  'MIDIPort',
  'MIDIOutputMap',
  'MIDIOutput',
  'MIDIMessageEvent',
  'MIDIInputMap',
  'MIDIInput',
  'MIDIConnectionEvent',
  'MIDIAccess',
  'InputDeviceInfo',
  'ImageCapture',
  'ImageBitmapRenderingContext',
  'IIRFilterNode',
  'IDBVersionChangeEvent',
  'IDBTransaction',
  'IDBRequest',
  'IDBOpenDBRequest',
  'IDBObjectStore',
  'IDBKeyRange',
  'IDBIndex',
  'IDBFactory',
  'IDBDatabase',
  'IDBCursorWithValue',
  'IDBCursor',
  'GamepadHapticActuator',
  'GamepadEvent',
  'Gamepad',
  'GamepadButton',
  'GainNode',
  'EventSource',
  'DynamicsCompressorNode',
  'DelayNode',
  'DOMError',
  'CryptoKey',
  'Crypto',
  'ConvolverNode',
  'ConstantSourceNode',
  'CloseEvent',
  'ChannelSplitterNode',
  'ChannelMergerNode',
  'CanvasRenderingContext2D',
  'CanvasPattern',
  'CanvasGradient',
  'CanvasCaptureMediaStreamTrack',
  'BroadcastChannel',
  'BlobEvent',
  'BiquadFilterNode',
  'BeforeInstallPromptEvent',
  'BatteryManager',
  'BaseAudioContext',
  'AudioWorkletNode',
  'AudioScheduledSourceNode',
  'AudioProcessingEvent',
  'AudioParamMap',
  'AudioParam',
  'AudioNode',
  'AudioListener',
  'AudioDestinationNode',
  'AudioContext',
  'AudioBufferSourceNode',
  'AudioBuffer',
  'AnalyserNode',
  'postMessage',
  'blur',
  'focus',
  'close',
  'XPathResult',
  'XPathExpression',
  'XPathEvaluator',
  'XMLSerializer',
  'XMLHttpRequestUpload',
  'XMLHttpRequestEventTarget',
  'XMLHttpRequest',
  'XMLDocument',
  'WritableStream',
  'Worker',
  'Window',
  'WheelEvent',
  'VisualViewport',
  'ValidityState',
  'VTTCue',
  'URLSearchParams',
  'URL',
  'UIEvent',
  'TreeWalker',
  'TransitionEvent',
  'TransformStream',
  'TrackEvent',
  'TouchList',
  'TouchEvent',
  'Touch',
  'TimeRanges',
  'TextTrackList',
  'TextTrackCueList',
  'TextTrackCue',
  'TextTrack',
  'TextMetrics',
  'TextEvent',
  'Text',
  'TaskAttributionTiming',
  'StyleSheetList',
  'StyleSheet',
  'StylePropertyMapReadOnly',
  'StylePropertyMap',
  'StaticRange',
  'ShadowRoot',
  'Selection',
  'SecurityPolicyViolationEvent',
  'Screen',
  'SVGViewElement',
  'SVGUseElement',
  'SVGUnitTypes',
  'SVGTransformList',
  'SVGTransform',
  'SVGTitleElement',
  'SVGTextPositioningElement',
  'SVGTextPathElement',
  'SVGTextElement',
  'SVGTextContentElement',
  'SVGTSpanElement',
  'SVGSymbolElement',
  'SVGSwitchElement',
  'SVGStyleElement',
  'SVGStringList',
  'SVGStopElement',
  'SVGSetElement',
  'SVGScriptElement',
  'SVGSVGElement',
  'SVGRectElement',
  'SVGRect',
  'SVGRadialGradientElement',
  'SVGPreserveAspectRatio',
  'SVGPolylineElement',
  'SVGPolygonElement',
  'SVGPointList',
  'SVGPoint',
  'SVGPatternElement',
  'SVGPathElement',
  'SVGNumberList',
  'SVGNumber',
  'SVGMetadataElement',
  'SVGMatrix',
  'SVGMaskElement',
  'SVGMarkerElement',
  'SVGMPathElement',
  'SVGLinearGradientElement',
  'SVGLineElement',
  'SVGLengthList',
  'SVGLength',
  'SVGImageElement',
  'SVGGraphicsElement',
  'SVGGradientElement',
  'SVGGeometryElement',
  'SVGGElement',
  'SVGForeignObjectElement',
  'SVGFilterElement',
  'SVGFETurbulenceElement',
  'SVGFETileElement',
  'SVGFESpotLightElement',
  'SVGFESpecularLightingElement',
  'SVGFEPointLightElement',
  'SVGFEOffsetElement',
  'SVGFEMorphologyElement',
  'SVGFEMergeNodeElement',
  'SVGFEMergeElement',
  'SVGFEImageElement',
  'SVGFEGaussianBlurElement',
  'SVGFEFuncRElement',
  'SVGFEFuncGElement',
  'SVGFEFuncBElement',
  'SVGFEFuncAElement',
  'SVGFEFloodElement',
  'SVGFEDropShadowElement',
  'SVGFEDistantLightElement',
  'SVGFEDisplacementMapElement',
  'SVGFEDiffuseLightingElement',
  'SVGFEConvolveMatrixElement',
  'SVGFECompositeElement',
  'SVGFEComponentTransferElement',
  'SVGFEColorMatrixElement',
  'SVGFEBlendElement',
  'SVGEllipseElement',
  'SVGElement',
  'SVGDiscardElement',
  'SVGDescElement',
  'SVGDefsElement',
  'SVGComponentTransferFunctionElement',
  'SVGClipPathElement',
  'SVGCircleElement',
  'SVGAnimationElement',
  'SVGAnimatedTransformList',
  'SVGAnimatedString',
  'SVGAnimatedRect',
  'SVGAnimatedPreserveAspectRatio',
  'SVGAnimatedNumberList',
  'SVGAnimatedNumber',
  'SVGAnimatedLengthList',
  'SVGAnimatedLength',
  'SVGAnimatedInteger',
  'SVGAnimatedEnumeration',
  'SVGAnimatedBoolean',
  'SVGAnimatedAngle',
  'SVGAnimateTransformElement',
  'SVGAnimateMotionElement',
  'SVGAnimateElement',
  'SVGAngle',
  'SVGAElement',
  'Response',
  'ResizeObserverEntry',
  'ResizeObserver',
  'Request',
  'ReportingObserver',
  'ReadableStream',
  'Range',
  'RadioNodeList',
  'PromiseRejectionEvent',
  'ProgressEvent',
  'ProcessingInstruction',
  'PopStateEvent',
  'PointerEvent',
  'PerformanceTiming',
  'PerformanceServerTiming',
  'PerformanceResourceTiming',
  'PerformancePaintTiming',
  'PerformanceObserverEntryList',
  'PerformanceObserver',
  'PerformanceNavigationTiming',
  'PerformanceNavigation',
  'PerformanceMeasure',
  'PerformanceMark',
  'PerformanceLongTaskTiming',
  'PerformanceEventTiming',
  'PerformanceEntry',
  'Performance',
  'PageTransitionEvent',
  'OffscreenCanvas',
  'NodeList',
  'NodeIterator',
  'NodeFilter',
  'Node',
  'Navigator',
  'NamedNodeMap',
  'MutationRecord',
  'MutationObserver',
  'MutationEvent',
  'MouseEvent',
  'MessagePort',
  'MessageEvent',
  'MessageChannel',
  'MediaQueryListEvent',
  'MediaQueryList',
  'MediaList',
  'MediaError',
  'Location',
  'KeyframeEffect',
  'KeyboardEvent',
  'IntersectionObserverEntry',
  'IntersectionObserver',
  'InputEvent',
  'InputDeviceCapabilities',
  'ImageData',
  'ImageBitmap',
  'IdleDeadline',
  'History',
  'Headers',
  'HashChangeEvent',
  'HTMLVideoElement',
  'HTMLUnknownElement',
  'HTMLUListElement',
  'HTMLTrackElement',
  'HTMLTitleElement',
  'HTMLTimeElement',
  'HTMLTextAreaElement',
  'HTMLTemplateElement',
  'HTMLTableSectionElement',
  'HTMLTableRowElement',
  'HTMLTableElement',
  'HTMLTableColElement',
  'HTMLTableCellElement',
  'HTMLTableCaptionElement',
  'HTMLStyleElement',
  'HTMLSpanElement',
  'HTMLSourceElement',
  'HTMLSlotElement',
  'HTMLShadowElement',
  'HTMLSelectElement',
  'HTMLScriptElement',
  'HTMLQuoteElement',
  'HTMLProgressElement',
  'HTMLPreElement',
  'HTMLPictureElement',
  'HTMLParamElement',
  'HTMLParagraphElement',
  'HTMLOutputElement',
  'HTMLOptionsCollection',
  'Option',
  'HTMLOptionElement',
  'HTMLOptGroupElement',
  'HTMLObjectElement',
  'HTMLOListElement',
  'HTMLModElement',
  'HTMLMeterElement',
  'HTMLMetaElement',
  'HTMLMenuElement',
  'HTMLMediaElement',
  'HTMLMarqueeElement',
  'HTMLMapElement',
  'HTMLLinkElement',
  'HTMLLegendElement',
  'HTMLLabelElement',
  'HTMLLIElement',
  'HTMLInputElement',
  'Image',
  'HTMLImageElement',
  'HTMLIFrameElement',
  'HTMLHtmlElement',
  'HTMLHeadingElement',
  'HTMLHeadElement',
  'HTMLHRElement',
  'HTMLFrameSetElement',
  'HTMLFrameElement',
  'HTMLFormElement',
  'HTMLFormControlsCollection',
  'HTMLFontElement',
  'HTMLFieldSetElement',
  'HTMLEmbedElement',
  'HTMLElement',
  'HTMLDocument',
  'HTMLDivElement',
  'HTMLDirectoryElement',
  'HTMLDialogElement',
  'HTMLDetailsElement',
  'HTMLDataListElement',
  'HTMLDataElement',
  'HTMLDListElement',
  'HTMLContentElement',
  'HTMLCollection',
  'HTMLCanvasElement',
  'HTMLButtonElement',
  'HTMLBodyElement',
  'HTMLBaseElement',
  'HTMLBRElement',
  'Audio',
  'HTMLAudioElement',
  'HTMLAreaElement',
  'HTMLAnchorElement',
  'HTMLAllCollection',
  'FormData',
  'FontFaceSetLoadEvent',
  'FontFace',
  'FocusEvent',
  'FileReader',
  'FileList',
  'File',
  'External',
  'EventTarget',
  'Event',
  'ErrorEvent',
  'Element',
  'DragEvent',
  'DocumentType',
  'DocumentFragment',
  'Document',
  'DataTransferItemList',
  'DataTransferItem',
  'DataTransfer',
  'DOMTokenList',
  'DOMStringMap',
  'DOMStringList',
  'DOMRectReadOnly',
  'DOMRectList',
  'DOMRect',
  'DOMQuad',
  'DOMPointReadOnly',
  'DOMPoint',
  'DOMParser',
  'DOMMatrixReadOnly',
  'DOMMatrix',
  'DOMImplementation',
  'DOMException',
  'CustomEvent',
  'CustomElementRegistry',
  'CompositionEvent',
  'Comment',
  'ClipboardEvent',
  'CharacterData',
  'CSSVariableReferenceValue',
  'CSSUnparsedValue',
  'CSSUnitValue',
  'CSSTranslate',
  'CSSTransformValue',
  'CSSTransformComponent',
  'CSSSupportsRule',
  'CSSStyleValue',
  'CSSStyleSheet',
  'CSSStyleRule',
  'CSSStyleDeclaration',
  'CSSSkewY',
  'CSSSkewX',
  'CSSSkew',
  'CSSScale',
  'CSSRuleList',
  'CSSRule',
  'CSSRotate',
  'CSSPositionValue',
  'CSSPerspective',
  'CSSPageRule',
  'CSSNumericValue',
  'CSSNumericArray',
  'CSSNamespaceRule',
  'CSSMediaRule',
  'CSSMatrixComponent',
  'CSSMathValue',
  'CSSMathSum',
  'CSSMathProduct',
  'CSSMathNegate',
  'CSSMathMin',
  'CSSMathMax',
  'CSSMathInvert',
  'CSSKeywordValue',
  'CSSKeyframesRule',
  'CSSKeyframeRule',
  'CSSImportRule',
  'CSSImageValue',
  'CSSGroupingRule',
  'CSSFontFaceRule',
  'CSS',
  'CSSConditionRule',
  'CDATASection',
  'Blob',
  'BeforeUnloadEvent',
  'BarProp',
  'Attr',
  'AnimationEvent',
  'AnimationEffect',
  'Animation',
  'AbortSignal',
  'AbortController',
  'WebKitCSSMatrix',
  'WebKitMutationObserver',
  'webkitURL',
  'stop',
  'alert',
  'confirm',
  'prompt',
  'print',
  'queueMicrotask',
  'requestAnimationFrame',
  'cancelAnimationFrame',
  'captureEvents',
  'releaseEvents',
  'requestIdleCallback',
  'cancelIdleCallback',
  'getComputedStyle',
  'matchMedia',
  'moveTo',
  'moveBy',
  'resizeTo',
  'resizeBy',
  'scroll',
  'scrollTo',
  'scrollBy',
  'getSelection',
  'find',
  'webkitRequestAnimationFrame',
  'webkitCancelAnimationFrame',
  'fetch',
  'btoa',
  'atob',
  'setTimeout',
  'clearTimeout',
  'setInterval',
  'clearInterval',
  'createImageBitmap',
  'SharedArrayBuffer',
  'Atomics',
  'WebAssembly',
  'SharedWorker',
  'UserActivation',
  'XSLTProcessor',
  'ClipboardItem',
  'BackgroundFetchManager',
  'BackgroundFetchRecord',
  'BackgroundFetchRegistration',
  'MediaMetadata',
  'MediaSession',
  'Notification',
  'PaymentInstruments',
  'PaymentManager',
  'PaymentRequestUpdateEvent',
  'Permissions',
  'PermissionStatus',
  'EnterPictureInPictureEvent',
  'PictureInPictureWindow',
  'PushManager',
  'PushSubscription',
  'PushSubscriptionOptions',
  'RTCDtlsTransport',
  'RTCSctpTransport',
  'RemotePlayback',
  'webkitSpeechGrammar',
  'webkitSpeechGrammarList',
  'webkitSpeechRecognition',
  'webkitSpeechRecognitionError',
  'webkitSpeechRecognitionEvent',
  'SpeechSynthesisErrorEvent',
  'SpeechSynthesisEvent',
  'SpeechSynthesisUtterance',
  'BluetoothUUID',
  'webkitRequestFileSystem',
  'webkitResolveLocalFileSystemURL',
  'openDatabase',
  'Worklet',
  'ApplicationCache',
  'ApplicationCacheErrorEvent',
  'AudioWorklet',
  'Cache',
  'CacheStorage',
  'Clipboard',
  'Credential',
  'CredentialsContainer',
  'DeviceMotionEvent',
  'DeviceMotionEventAcceleration',
  'DeviceMotionEventRotationRate',
  'DeviceOrientationEvent',
  'FederatedCredential',
  'Keyboard',
  'KeyboardLayoutMap',
  'Lock',
  'LockManager',
  'MediaDeviceInfo',
  'MediaDevices',
  'MediaKeyMessageEvent',
  'MediaKeys',
  'MediaKeySession',
  'MediaKeyStatusMap',
  'MediaKeySystemAccess',
  'NavigationPreloadManager',
  'PasswordCredential',
  'RTCIceTransport',
  'ServiceWorker',
  'ServiceWorkerContainer',
  'ServiceWorkerRegistration',
  'StorageManager',
  'PaymentMethodChangeEvent',
  'PaymentAddress',
  'PaymentRequest',
  'PaymentResponse',
  'Presentation',
  'PresentationAvailability',
  'PresentationConnection',
  'PresentationConnectionAvailableEvent',
  'PresentationConnectionCloseEvent',
  'PresentationConnectionList',
  'PresentationReceiver',
  'PresentationRequest',
  'AbsoluteOrientationSensor',
  'Accelerometer',
  'Gyroscope',
  'LinearAccelerationSensor',
  'OrientationSensor',
  'RelativeOrientationSensor',
  'Sensor',
  'SensorErrorEvent',
  'AuthenticatorAssertionResponse',
  'AuthenticatorAttestationResponse',
  'AuthenticatorResponse',
  'PublicKeyCredential',
  'Bluetooth',
  'BluetoothCharacteristicProperties',
  'BluetoothDevice',
  'BluetoothRemoteGATTCharacteristic',
  'BluetoothRemoteGATTDescriptor',
  'BluetoothRemoteGATTServer',
  'BluetoothRemoteGATTService',
  'USB',
  'USBAlternateInterface',
  'USBConfiguration',
  'USBConnectionEvent',
  'USBDevice',
  'USBEndpoint',
  'USBInterface',
  'USBInTransferResult',
  'USBIsochronousInTransferPacket',
  'USBIsochronousInTransferResult',
  'USBIsochronousOutTransferPacket',
  'USBIsochronousOutTransferResult',
  'USBOutTransferResult',
  'profile',
  'profileEnd',
  'queryObjects',
  'getEventListeners',
  'monitorEvents',
  'unmonitorEvents'
])

export const knownBrowserGlobalsAsObject: Record<string, boolean> = {}

for (const k of knownBrowserGlobals) {
  knownBrowserGlobalsAsObject[k] = true
}
