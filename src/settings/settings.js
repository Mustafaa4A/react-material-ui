import DeleteSection from './delete-section';
import EmailSection from './email-section';
import NightmodeSection from './nightmode-section';
import PasswordSection from './password-section';

const Settings = () => {
  return (
    <div style={{backgroundColor:'#f7f6f2', margin:"10px", padding:'10px'}}>
      <NightmodeSection />
      <EmailSection />
      <PasswordSection />
      <DeleteSection />
    </div>
  );
}
export default Settings;