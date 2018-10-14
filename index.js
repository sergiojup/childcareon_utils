let notificationColor;

exports.init = (params) => {
  if(typeof params === 'undefined') return;
  if(params.hasOwnProperty('notificationColor')) notificationColor = params.notificationColor;
};

exports.addLeadingZeros = (num) => {
  if(parseInt(num) < 10) return '0'+num;
  return num;
};

exports.setNotification = (title,body,tag, extra) =>{
  if(!(notificationColor)) notificationColor = "#208648";
  let not = {
    notification:{
      "title":title,
      "body":body,
      "icon":"notification_icon",
      "color":notificationColor,
      "sound":"default"
    }
  };
  if(typeof tag !== 'undefined') not.notification.tag = tag;
  if(typeof extra !== 'undefined') not.data = extra;
  return not;
};

exports.getDay = (date) => {
  return exports.addLeadingZeros(date.getDate().toString()) + exports.addLeadingZeros((date.getMonth() +1).toString()) + date.getFullYear().toString().substring(2);
};

exports.getBirthdateDate = (date) => {
  return `${exports.addLeadingZeros(date.getDate().toString())}_${exports.addLeadingZeros((date.getMonth() +1).toString())}`;
};

exports.getPushText = (number,lang) => {
  console.log("lang is:",lang);
  switch(lang){
    case "en": return `You have ${number} new notifications`; break;
    case "ca": return `Tens ${number} noves notificacions`; break;
    default: return `Tienes ${number} notificaciones nuevas`;
  }
};

exports.getTranslated = (name, lang) => {
  namespace = {
    monthName: {
      en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      ca: ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Decembre'],
      eu: ['Urtarril', 'Otsail', 'Martxo', 'Apiril', 'Maiatz', 'Ekain', 'Uztail', 'Abuztu', 'Irail', 'Urri', 'Azaro', 'Abendu']
    },
    subject: {
      en: 'Assistance report',
      es: 'Reporte de asistencia',
      ca: 'Report d\'assistència',
      eu: 'Laguntza-txostena'
    },
    classroom: {
      en: 'Classroom',
      es: 'Clase',
      ca: 'Classe',
      eu: 'Class'
    },
    month: {
      en: 'Month',
      es: 'Mes',
      ca: 'Mes',
      eu: 'Hilabete'
    },
    school: {
      en: 'School',
      es: 'Escuela',
      ca: 'Escola',
      eu: 'Eskola'
    },
    attend: {
      en: 'Attend',
      es: 'Asiste',
      ca: 'Assisteix',
      eu: 'Joateko'
    },
    entry: {
      en: 'Entry t.',
      es: 'H. Ent.',
      ca: 'H. Ent.',
      eu: 'Sar. den.'
    },
    departure: {
      en: 'Dep. t.',
      es: 'H. Sal.',
      ca: 'H. Sort.',
      eu: 'Irteerako Ordua'
    },
    comment: {
      en: 'Comment',
      es: 'Coment.',
      ca: 'Coment.',
      eu: 'Iruzkin'
    },
    emailText: {
      en: 'Hello! Attached you can find the Excel of Assistance. Any questions, write us for technical support. A greeting!',
      es: 'Hola! Adjunto puedes encontrar el Excel de Asistencia. Cualquier duda, escríbenos por Soporte técnico. Un saludo!',
      ca: 'Hola! Adjunt podeu trobar l\'Excel d\'Assistència. Qualsevol dubte, escriu-nos per Suport tècnic. Una salutació!',
      eu: 'Hello! Laguntzako Excel aurkitu dezakezu. Edozein zalantza argitzeko, idatzi laguntza teknikorako. Agurra!'
    },
  };
  return namespace[name][lang];
}

exports.daysInMonth = (month, year) => {
  return new Date(year, month +1, 0).getDate();
}

exports.attendance = {
  parseAttendanceDate: (attendance) => {
    let attendanceToR = {};
    for (let dayTotal in attendance) {
      const day = parseInt(dayTotal.substr(0,2));
      const month = parseInt(dayTotal.substr(2,2)) -1;
      const year = parseInt(`20${dayTotal.substr(4,2)}`);
      const date = new Date(year,month,day,12).getTime();
      attendanceToR[date] = attendance[dayTotal];
    }
    return attendanceToR;
  },
  getMaxMin: () => {
    const start = new Date();
    const finish = new Date();
    let yearStart = start.getFullYear();
    let yearFinish = finish.getFullYear();
    if (start.getMonth() < startMonth) {
      start.setFullYear(yearStart -1);
    } else {
      finish.setFullYear(yearFinish +1);
    }
    start.setMonth(8);
    start.setDate(1);
    finish.setMonth(7);
    finish.setDate(31);
    return {start: start, finish: finish};
  }
}