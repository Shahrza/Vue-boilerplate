import Moment from 'moment'

export default function(value) {
  if (value) {
    return Moment(new Date(value)).format("L");
  }
}
