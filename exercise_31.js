const angles = {
  'agudo': {
    min: 1,
    max: 89
  },
  'recto': {
    min: 90,
    max: 90
  },
  'obtuso': {
    min: 91,
    max: 179
  },
  'llano':
    {
      min: 180,
      max: 180
    },
  'cóncavo': {
    min: 181,
    max: 359
  },
  'completo': {
    min: 360,
    max: 360
  }
};


const angle = (opening) => {
  let selectedAngle = 'Este método solo está preparado para recibir ángulos válidos';
  Object.keys(angles).every((angle) => {
    if (opening >= angles[angle].min && opening <= angles[angle].max) {
      selectedAngle = angle;
      return true;
    }
    return true;
  });
  return selectedAngle;
}


console.log(angle(90));
