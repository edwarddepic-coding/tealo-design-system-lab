import { TextPreview } from "./components/Text/Text.preview";
import ButtonLab from "./lab/ButtonLab";
import CheckboxLab from "./lab/CheckboxLab";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
      <TextPreview />
      <ButtonLab />
      <CheckboxLab />
    </div>
  );
}

export default App;
