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