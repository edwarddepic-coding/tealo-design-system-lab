import { ButtonPreview } from "./components/Button/Button.preview";
import { TextPreview } from "./components/Text/Text.preview";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
      <TextPreview />
      <ButtonPreview />
    </div>
  );
}

export default App;
