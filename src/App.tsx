// import React, { useState, useEffect, useCallback } from 'react';
// import { Shield, AlertTriangle, Camera, Mic, MicOff, CameraOff } from 'lucide-react';
// import { fraudPatterns } from './utils/fraudPatterns';
// import { Alert } from './components/Alert';

// function App() {
//   const [input, setInput] = useState('');
//   const [alerts, setAlerts] = useState<Array<{
//     id: number;
//     message: string;
//     risk: string;
//     category: string;
//   }>>([]);
//   const [analyzing, setAnalyzing] = useState(false);
//   const [cameraActive, setCameraActive] = useState(false);
//   const [microphoneActive, setMicrophoneActive] = useState(false);
//   const [acknowledgedAlerts, setAcknowledgedAlerts] = useState<Set<string>>(new Set());

//   // Create audio context for the buzzer
//   const [audio] = useState(() => new Audio('data:audio/wav;base64,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'));

//   // Function to play buzzer sound
//   const playBuzzer = useCallback(() => {
//     audio.currentTime = 0;
//     audio.play().catch(console.error);
//   }, [audio]);

//   // Monitor media devices
//   useEffect(() => {
//     const checkMediaDevices = async () => {
//       try {
//         if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
//           console.log('Media Devices API not supported');
//           return;
//         }

//         const devices = await navigator.mediaDevices.enumerateDevices();
//         const hasCamera = devices.some(device => device.kind === 'videoinput');
//         const hasMicrophone = devices.some(device => device.kind === 'audioinput');

//         if (!hasCamera && !hasMicrophone) {
//           console.log('No media devices found');
//           return;
//         }

//         const constraints = {
//           audio: hasMicrophone,
//           video: hasCamera
//         };

//         const streams = await navigator.mediaDevices.getUserMedia(constraints);
//         const tracks = streams.getTracks();
        
//         const hasActiveCamera = tracks.some(track => track.kind === 'video' && track.enabled);
//         const hasActiveMicrophone = tracks.some(track => track.kind === 'audio' && track.enabled);

//         setCameraActive(hasActiveCamera);
//         setMicrophoneActive(hasActiveMicrophone);

//         // Only alert if not already acknowledged
//         if ((hasActiveCamera || hasActiveMicrophone) && !acknowledgedAlerts.has('media-devices')) {
//           const activeDevices = [
//             hasActiveCamera && 'Camera',
//             hasActiveMicrophone && 'Microphone'
//           ].filter(Boolean);
          
//           const newAlert = {
//             id: Date.now(),
//             message: `Warning: ${activeDevices.join(' and ')} currently active!`,
//             risk: 'high',
//             category: 'Privacy Alert',
//           };
//           setAlerts(prev => [...prev, newAlert]);
//           playBuzzer();
//         }

//         tracks.forEach(track => track.stop());
//       } catch (error) {
//         if (error instanceof Error) {
//           if (error.name === 'NotFoundError') {
//             console.log('Required media devices not found');
//           } else if (error.name === 'NotAllowedError') {
//             console.log('Permission to use media devices was denied');
//           } else if (error.name === 'NotReadableError') {
//             console.log('Media devices already in use');
//           } else {
//             console.error('Error accessing media devices:', error);
//           }
//         }
//       }
//     };

//     checkMediaDevices();
//     const interval = setInterval(checkMediaDevices, 5000);

//     return () => clearInterval(interval);
//   }, [playBuzzer, acknowledgedAlerts]);

  

//   // Analyze text for potential fraud
//   const analyzeText = useCallback((text: string) => {
//     setAnalyzing(true);
//     const newAlerts: typeof alerts = [];

//     fraudPatterns.forEach((pattern, index) => {
//       const alertKey = `${pattern.category}-${text}`;
//       if (pattern.pattern.test(text) && !acknowledgedAlerts.has(alertKey)) {
//         newAlerts.push({
//           id: Date.now() + index,
//           message: pattern.message,
//           risk: pattern.risk,
//           category: pattern.category,
//         });
//       }
//     });

//     if (newAlerts.length > 0) {
//       setAlerts(prev => [...prev, ...newAlerts]);
//       playBuzzer();
//     }

//     setAnalyzing(false);
//   }, [playBuzzer, acknowledgedAlerts]);

//   // Analyze text when input changes (with debounce)
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (input.trim()) {
//         analyzeText(input);
//       }
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [input, analyzeText]);

//   // Handle alert acknowledgment
//   const handleAlertAcknowledge = useCallback((category: string, message: string) => {
//     const alertKey = `${category}-${message}`;
//     setAcknowledgedAlerts(prev => new Set(prev).add(alertKey));
//     setAlerts(prev => prev.filter(alert => 
//       !(alert.category === category && alert.message === message)
//     ));
//   }, []);
  
  

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <Shield className="h-8 w-8 text-indigo-600" />
//               <h1 className="ml-3 text-2xl font-bold text-gray-900">
//                 Fraud Detection System
//               </h1>
//             </div>
//             <div className="flex items-center space-x-4">
//               {/* Media Device Status */}
//               <div className="flex items-center space-x-3">
//                 <div className="flex items-center">
//                   {cameraActive ? (
//                     <Camera className="h-5 w-5 text-red-500" />
//                   ) : (
//                     <CameraOff className="h-5 w-5 text-gray-400" />
//                   )}
//                 </div>
//                 <div className="flex items-center">
//                   {microphoneActive ? (
//                     <Mic className="h-5 w-5 text-red-500" />
//                   ) : (
//                     <MicOff className="h-5 w-5 text-gray-400" />
//                   )}
//                 </div>
//               </div>
//               {analyzing && (
//                 <div className="flex items-center text-sm text-gray-500">
//                   <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 animate-pulse" />
//                   Analyzing...
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <div className="mb-6">
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//               Enter message to analyze
//             </label>
//             <textarea
//               id="message"
//               rows={4}
//               className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               placeholder="Paste any suspicious message here..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//             />
//           </div>

//           {/* Analysis Results */}
//           <div className="mt-6">
//             <h2 className="text-lg font-medium text-gray-900 mb-4">Analysis Guidelines</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {fraudPatterns.map((pattern, index) => (
//                 <div key={index} className="bg-gray-50 p-4 rounded-lg">
//                   <h3 className="font-medium text-gray-900 mb-2">{pattern.category}</h3>
//                   <p className="text-sm text-gray-600">{pattern.message}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Alerts */}
//       <div className="fixed bottom-4 right-4 space-y-4">
//         {alerts.map((alert) => (
//           <Alert
//             key={alert.id}
//             message={alert.message}
//             risk={alert.risk}
//             category={alert.category}
//             onClose={() => setAlerts(prev => prev.filter(a => a.id !== alert.id))}
//             onAcknowledge={() => handleAlertAcknowledge(alert.category, alert.message)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect, useCallback } from 'react';
import { Shield, AlertTriangle, Camera, Mic, MicOff, CameraOff } from 'lucide-react';
import { fraudPatterns } from './utils/fraudPatterns';
import { Alert } from './components/Alert';

function App() {
  const [input, setInput] = useState('');
  const [alerts, setAlerts] = useState<Array<{
    id: number;
    message: string;
    risk: string;
    category: string;
  }>>([]);
  const [analyzing, setAnalyzing] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [microphoneActive, setMicrophoneActive] = useState(false);
  const [acknowledgedAlerts, setAcknowledgedAlerts] = useState<Set<string>>(new Set());

  // Create audio context for the buzzer
  const [audio] = useState(() => new Audio('data:audio/wav;base64,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'));

  // Function to play buzzer sound
  const playBuzzer = useCallback(() => {
    audio.currentTime = 0;
    audio.play().catch(console.error);
  }, [audio]);

  // Monitor media devices
  useEffect(() => {
    const checkMediaDevices = async () => {
      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
          console.log('Media Devices API not supported');
          return;
        }

        const devices = await navigator.mediaDevices.enumerateDevices();
        const hasCamera = devices.some(device => device.kind === 'videoinput');
        const hasMicrophone = devices.some(device => device.kind === 'audioinput');

        if (!hasCamera && !hasMicrophone) {
          console.log('No media devices found');
          return;
        }

        const constraints = {
          audio: hasMicrophone,
          video: hasCamera
        };

        const streams = await navigator.mediaDevices.getUserMedia(constraints);
        const tracks = streams.getTracks();
        
        const hasActiveCamera = tracks.some(track => track.kind === 'video' && track.enabled);
        const hasActiveMicrophone = tracks.some(track => track.kind === 'audio' && track.enabled);

        setCameraActive(hasActiveCamera);
        setMicrophoneActive(hasActiveMicrophone);

        // Only alert if not already acknowledged
        if ((hasActiveCamera || hasActiveMicrophone) && !acknowledgedAlerts.has('media-devices')) {
          const activeDevices = [
            hasActiveCamera && 'Camera',
            hasActiveMicrophone && 'Microphone'
          ].filter(Boolean);
          
          const newAlert = {
            id: Date.now(),
            message: `Warning: ${activeDevices.join(' and ')} currently active!`,
            risk: 'high',
            category: 'Privacy Alert',
          };
          setAlerts(prev => [...prev, newAlert]);
          playBuzzer();
        }

        tracks.forEach(track => track.stop());
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === 'NotFoundError') {
            console.log('Required media devices not found');
          } else if (error.name === 'NotAllowedError') {
            console.log('Permission to use media devices was denied');
          } else if (error.name === 'NotReadableError') {
            console.log('Media devices already in use');
          } else {
            console.error('Error accessing media devices:', error);
          }
        }
      }
    };

    checkMediaDevices();
    const interval = setInterval(checkMediaDevices, 5000);

    return () => clearInterval(interval);
  }, [playBuzzer, acknowledgedAlerts]);

  // Analyze text for potential fraud
  const analyzeText = useCallback((text: string) => {
    setAnalyzing(true);
    const newAlerts: typeof alerts = [];

    fraudPatterns.forEach((pattern, index) => {
      const alertKey = `${pattern.category}-${text}`;
      if (pattern.pattern.test(text) && !acknowledgedAlerts.has(alertKey)) {
        newAlerts.push({
          id: Date.now() + index,
          message: pattern.message,
          risk: pattern.risk,
          category: pattern.category,
        });
      }
    });

    if (newAlerts.length > 0) {
      setAlerts(prev => [...prev, ...newAlerts]);
      playBuzzer();
    }

    setAnalyzing(false);
  }, [playBuzzer, acknowledgedAlerts]);

  // Analyze text when input changes (with debounce)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (input.trim()) {
        analyzeText(input);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [input, analyzeText]);

  // Handle alert acknowledgment
  const handleAlertAcknowledge = useCallback((category: string, message: string) => {
    const alertKey = `${category}-${message}`;
    setAcknowledgedAlerts(prev => new Set(prev).add(alertKey));
    setAlerts(prev => prev.filter(alert => 
      !(alert.category === category && alert.message === message)
    ));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-indigo-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">
                Fraud Detection System
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              {/* Media Device Status */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  {cameraActive ? (
                    <Camera className="h-5 w-5 text-red-500" />
                  ) : (
                    <CameraOff className="h-5 w-5 text-gray-400" />
                  )}
                </div>
                <div className="flex items-center">
                  {microphoneActive ? (
                    <Mic className="h-5 w-5 text-red-500" />
                  ) : (
                    <MicOff className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </div>
              {analyzing && (
                <div className="flex items-center text-sm text-gray-500">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 animate-pulse" />
                  Analyzing...
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Enter message to analyze
            </label>
            <textarea
              id="message"
              rows={4}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Paste any suspicious message here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          {/* Analysis Results */}
          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Analysis Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {fraudPatterns.map((pattern, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">{pattern.category}</h3>
                  <p className="text-sm text-gray-600">{pattern.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Alerts */}
      <div className="fixed bottom-4 right-4 space-y-4">
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            message={alert.message}
            risk={alert.risk}
            category={alert.category}
            onClose={() => setAlerts(prev => prev.filter(a => a.id !== alert.id))}
            onAcknowledge={() => handleAlertAcknowledge(alert.category, alert.message)}
          />
        ))}
      </div>
    </div>
  );
}
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

interface ProcessRequest {
  text: string;
}

interface ProcessResponse {
  alert: boolean;
  message: string;
}

app.post('/api/process', (req: Request<{}, {}, ProcessRequest>, res: Response<ProcessResponse>) => {
  const { text } = req.body;
  let alert = false;
  let message = '';

  if (text.includes('suspicious')) {
    alert = true;
    message = 'Fraudulent text detected: Avoid suspicious links.';
  }

  res.json({ alert, message });
});

app.listen(3000, () => {
  console.log('Web app running on port 3000');
});

export default App;