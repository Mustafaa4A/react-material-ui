import DeleteSection from './delete-section';
import EmailSection from './email-section';
import NightmodeSection from './nightmode-section';

const Settings = () => {
  return (
    <div style={{backgroundColor:'#ff9', margin:"10px", padding:'10px'}}>
      <NightmodeSection />
      <EmailSection />
      <DeleteSection />
    </div>
  );
}
export default Settings;