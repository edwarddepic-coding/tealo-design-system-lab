import { TextPreview } from "./components/Text/Text.preview";
import TealoButtonLab from "./lab/TealoButtonLab";
import TealoCheckboxLab from "./lab/TealoCheckboxLab";
import TealoInputLab from "./lab/TealoInputLab";
import TealoLabelLab from "./lab/TealoLabelLab";
import TealoSelectLab from "./lab/TealoSelectLab";
import TealoTextareaLab from "./lab/TealoTextareaLab";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
      <TextPreview />
      <TealoButtonLab />
      <TealoCheckboxLab />
      <TealoInputLab />
      <TealoLabelLab />
      <TealoSelectLab />
      <TealoTextareaLab />
    </div>
  );
}

export default App;
