import { TextPreview } from "./components/Text/Text.preview";
import ButtonLab from "./lab/ButtonLab";
import CheckboxLab from "./lab/CheckboxLab";
import InputLab from "./lab/InputLab";
import LabelLab from "./lab/LabelLab";
import TextareaLab from "./lab/TextareaLab";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
      <TextPreview />
      <ButtonLab />
      <CheckboxLab />
      <InputLab />
      <LabelLab />
      <TextareaLab />
    </div>
  );
}

export default App;
