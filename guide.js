let commonHeaders = ['Nerve Number', 'Nerve', 'Classification', 'Major Functions', 'Assessment'];

let cardMaker = function(NerveNumber, Nerve, Classification, MajorFunctions, Assessment){
  let card = {};
  card.panel = {};
  
  card.panelOrder = commonHeaders;
  card.panelSizes = ['col-6', 'col-6', 'col-6', 'col-6', 'col-12'];
  card.panelImage = {};

  for(let commonHeaderIndex in commonHeaders){
    let commonHeader = commonHeaders[commonHeaderIndex];
    card.panel[commonHeader] = "";
  }

  if(NerveNumber){
    card.panel['Nerve Number'] = NerveNumber;
  }
  if(Nerve){
    card.panel['Nerve'] = Nerve;
  }
  if(Classification){
    card.panel['Classification'] = Classification;
  }
  if(MajorFunctions){
    card.panel['Major Functions'] = MajorFunctions;
  }
  if(Assessment){
    card.panel['Assessment'] = Assessment;
  }
  return card;
};

let cards = {};

// olfactory
cards.olfactory = cardMaker(
  '1', 
  'Olfactory', 
  'Sensory', 
  'Smell', 
  'Have patient identify a familiar scent with eyes closed. Usually deferred'
);

cards.olfactory.panelImage['Nerve'] = "";

// optic
cards.optic = cardMaker(
  '2',
  'Optic',
  'Sensory', 
  'Vision (acuity and field of vision); pupil reactivity to light and accomodation (afferent impulse)',
  'Have patient read from a cord or newspaper, one eye at a time. Test visual fields by having patient cover one eye, focus on your nose, and identify the number of fingers you\'re holding up in each of four visual quadrants'
);

cards.oculomotor = cardMaker(
  '3',
  'Oculomotor',
  'Motor',
  'Eyelid elecation; most EOMs; pipil size and reactivity efferent impulse',
  'Check pupillary responses by shining a bright light on one pupil both pupils should constrict. Do the same for the other eye. To check accomodation, move your finger toward the patient\'s nose; the pupiles should constrict and converge. Check EOMs by having patient look up, down, laterally, and diagonally.'
);

cards.trochlear = cardMaker(
  '4',
  'Trochlear',
  'Motor',
  'EOM (truns eye downward and laterally)',
  'Have patient look down and in.'
);

cards.trigeminal = cardMaker(
  '5',
  'Trigeminal',
  'Both',
  'Chewing; facial and mouth sensation; corneal reflex (sensory)',
  'Ask patent to hold the mouth open while you try to close it and to move the jaw laterally against your hand. With patient\'s eyes closed, touch her face with cotton and have her identify the area touched. In comatose patients, brush the cornea with a wisp of cotton; the patient should blink'
);

cards.abducens = cardMaker(
  '6',
  'Abducens',
  'Motor',
  'EOM (turns eye laterally)',
  'Have patient move the eyes from side to side'
);

cards.facial = cardMaker(
  '7',
  'Facial',
  'Both',
  'Facial Expression; taste; corneal reflex (motor); eyelid and lip closure',
  'Ask patient to smile, raise eyebrows, and keep eyes and lips closed while you try to open them. Have patient identify salt or sugar placed on the tongue (usually deferred)'
);

cards.acoustic = cardMaker(
  '8',
  'Acoustic / Vistibularcochlear',
  'Sensory',
  'Hearing; equilibrium',
  'To test heaing, use tuning fork or rub your fingers, place a ticking watch, or whisper near each ear. Equilibrium testing is usually deferred.'
);

cards.glossopharayngeal = cardMaker(
  '9',
  'Glossopharayngeal',
  'Both',
  'Gagging and swallowing (sensory)',
  'Touch back of throad with sterile tongue depressor or cotton-tipped applicator. Have patient swallow.'
);

cards.vagus = cardMaker(
  '10',
  'Vagus',
  'Both',
  'Gagging and swallowing (motor); speech (phonation)',
  'Assess gag and swallowing with CN IX (9). Assess vocal quality'
);

cards.spinal = cardMaker(
  '11',
  'Spinal Accessory',
  'Motor',
  'Shoulder movement; head rotation',
  'Have patient shrug shoulders and trun head from iside to side (not routinely tested)'
);

cards.hypoglossal = cardMaker(
  '12',
  'Hypoglossal',
  'Motor',
  'Tongue movement; speech (articulation)',
  'Have patient stick out tongue and move it interally from cheek to cheek. Assess articulation'
);

module.exports = cards;