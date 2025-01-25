// Common fraud patterns and suspicious activities
export const fraudPatterns = [
  {
    pattern:/(send|transfer|deposit|credit card|debit card).*(money|funds|payment|number|details)|(credit card|debit card)/i,
    category: 'Money Transfer',
    risk: 'high',
    message: 'Request for money transfer detected! Be cautious of unexpected payment requests.',
  },
  {
    pattern: /(scan|clickqr|link|code)/i,
    category: 'Suspicious Links/ QR',
    risk: 'high',
    message: 'Request to scan QR code or click links detected! Verify the source before proceeding to the next step.',
  },
  {
    pattern: /(urgent|immediate|emergency).*(action|attention|response)|(urgent|urgently|right away|immediate|emergency|asap)/i,
    category: 'Urgency',
    risk: 'medium',
    message: 'Urgency tactics detected! Scammers often create false sense of urgency.',
  },
  {
    pattern: /(verify|confirm|validate).*(account|identity|details)/i,
    category: 'Identity Verification',
    risk: 'high',
    message: 'Account verification request detected! Legitimate companies never ask for sensitive information via messages.',
  },
  {
    pattern: /(won|winner|lottery|prize|reward|lucky draw)/i,
    category: 'Prize Scam',
    risk: 'high',
    message: 'Potential prize scam detected! Be wary of unexpected winnings or rewards.',
  },
  {
    pattern: /(video.*call|voice.*call|audio.*call|meet.*online|zoom.*call|teams.*call|google.*meet)/i,
    category: 'Call Request',
    risk: 'high',
    message: '⚠️ Video/Audio call request detected! Be aware of potential risks:\n- Screen/Voice recording without consent\n- Deep fake video creation\n- Voice Activated Model Training\n- Blackmail attempts\n- Identity theft',
  },
  {
    pattern: /(private|intimate|personal|password).*(video|photo|picture|image|code|number|alphabets)|(OTP|PIN|password)/i,
    category: 'Privacy Risk',
    risk: 'high',
    message: '🚨 Request for private content detected! High risk of:\n- Blackmail\n- Unauthorzied Possession of Account\n- Content manipulation\n- Identity theft\n- Online harassment',
  },
  {
    pattern: /(camera|webcam|video).*(on|enable|start|show)|(share screen)/i,
    category: 'Camera Access',
    risk: 'high',
    message: '⚠️ Camera access request detected! Risks include:\n- Unauthorized recording\n- Deep fake creation\n- Privacy violation\n- Potential exploitation',
  },
  {
    pattern: /(record|save|capture).*(screen|video|call)/i,
    category: 'Recording Alert',
    risk: 'high',
    message: '🚨 Recording request detected! Be aware:\n- Content can be manipulated\n- May be used for blackmail\n- Could be shared without consent\n- Potential for deep fake creation',
  },
  {
    pattern: /(report|complaint|police|authorities|fir|jail|legal action)/i,
    category: 'Threatening',
    risk: 'high',
    message: 'Threatining tactics detected! Scammers often threaten and take advantage of your vulnerability. Be Cautious!',
  },
  {
    pattern: /(investment|crypto|bitcoin|forex|trading|returns|profit|scheme|guarantee)/i,
    category: 'Investment Scam',
    risk: 'high',
    message: 'Investment scheme detected! Be cautious of high-return promises or unverified investment opportunities.',
  },
];