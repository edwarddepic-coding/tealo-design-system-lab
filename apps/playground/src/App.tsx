import { TextPreview } from "./components/Text/Text.preview";
import ButtonLab from "./lab/ButtonLab";
import CheckboxLab from "./lab/CheckboxLab";
import InputLab from "./lab/InputLab";
import LabelLab from "./lab/LabelLab";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
      <TextPreview />
      <ButtonLab />
      <CheckboxLab />
      <InputLab />
      <LabelLab />
    </div>
  );
}

export default App;
