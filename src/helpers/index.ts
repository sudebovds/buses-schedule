import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

export const getTimeHandler = (): String => {
    return format(formHelsinkiTimeHandler(), 'HH:mm');
}

export const formHelsinkiTimeHandler = () => {
    const timeZone = 'Europe/Helsinki';
    return utcToZonedTime(new Date(), timeZone)
  }