import { ButtonPreview } from "./components/Button/Button.preview";
import { TextPreview } from "./components/Text/Text.preview";
import CheckboxLab from "./lab/CheckboxLab";

function App() {
  return (
    <>
      <CheckboxLab />
      <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        <TextPreview />
        <ButtonPreview />
      </div>
    </>
  );
}

export default App;
