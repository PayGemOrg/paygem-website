const format_date_time = (date: string) => {
    return date
}

const isEmpty = (obj: Object) => {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
  
    return true;
}

export {
    format_date_time,
    isEmpty
}