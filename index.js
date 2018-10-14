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