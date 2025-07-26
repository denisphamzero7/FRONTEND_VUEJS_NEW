
import { ref, watch } from "vue";

interface  GeneralSettings
{
  username:string;
  email: string;
  about:string;
  gender:string
  country:string

}
const init = <T>(key:string,defaults
)=>{
  const stored = localStorage.getItem(key);
  return stored != null
    ? (JSON.parse(stored) as GeneralSettings)
    : {
        about: '',
        country: 'Usa',
        gender: 'male',
        email: '',
        username: ''
      };
}
const general = ref<GeneralSettings>((() => {

})());
watch(general,(value)=> localStorage.setItem('general',JSON.stringify(value)),{deep:true})
interface NotificationsSettings{
  email:boolean,
  sms:boolean;
}
const notification = ref<NotificationsSettings>({
  email:false,
  sms:false
})
interface PrivacySettings {
  visibility: string,
  seachEngineIndexing:boolean;

}
const privacy = ref<PrivacySettings>({

  visibility:'',
  seachEngineIndexing:false
})
export function useSettings(){
  return {
    general, notification,privacy
  }
}
