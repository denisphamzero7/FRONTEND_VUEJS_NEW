import {ref} from 'vue';

const bookings = ref([])
const events=ref([])
const error = ref(null)
const loading =ref(false)
const EventLoading =ref(false)
const fetchBookings =async()=>{
 loading.value=true
 error.value=null
  try {
  const response = await fetch('http://localhost:3001/bookings')
  bookings.value= await  response.json()
  console.log( ' logKbokhu:',bookings.value);
  }catch (e){
     error.value=e;
  }
  finally {
    loading.value=false
  }
}
const findBookingId =(id)=> bookings.value.findIndex(
  (b)=>b.id === id);

const cancel = async(bookingId)=>{
const index = findBookingId(bookingId);
const orinalBooking = bookings.value[index];
bookings.value.splice(index,1);
try {
const response =await fetch(`http://localhost:3001/bookings/${bookingId}`,{
    method:'DELETE'
});
if(!response.ok){
  throw new Error('Booking could not be cancelled');
}
} catch (error) {
  console.error(`Fail cancel booking:`,error)
  bookings.value.splice(index,0, orinalBooking)
}
}
const register = async(event)=>{
if(bookings.value.some((booking)=>booking.eventId === event.id && booking.userId===1)){
  alert('you are already registered for this event')
  return
}
const newBooking ={
id:Date.now().toString(),
userId:1,
eventId:event.id,
eventTitle:event.title,
status:'pending'
}
bookings.value.push(newBooking)
console.log('log :',newBooking);
try {
const response =await fetch('http://localhost:3001/bookings',{
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
  ...newBooking,
  status:'confirmed'
})
})
if(response.ok){
const index = bookings.value.findIndex(
  (b)=>b.id === newBooking.id);
  bookings.value[index] = await response.json()

}else{
throw new Error('fail to confirm booking')
}
} catch (e) {
console.error(`Failed to register for event:`,e)
bookings.value.filter((b)=>b.id != newBooking.id)
}

}
const fetchEvent =async()=>{
     loading.value=true
   try {
   const response = await fetch('http://localhost:3001/events')
   events.value= await  response.json()
   console.log(events.value);
   } finally {
     loading.value=false
   }
 }
export default function useBookings(){
  return {
    bookings,events,loading,EventLoading,error,fetchBookings,findBookingId,cancel,register,fetchEvent
  }
}
