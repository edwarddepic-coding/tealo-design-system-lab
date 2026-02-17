import { useEffect } from "react";
import { TextPreview } from "./components/Text/Text.preview";
import TealoButtonLab from "./lab/TealoButtonLab";
import TealoCheckboxLab from "./lab/TealoCheckboxLab";
import TealoDialogLab from "./lab/TealoDialogLab";
import TealoInputLab from "./lab/TealoInputLab";
import TealoLabelLab from "./lab/TealoLabelLab";
import TealoSelectLab from "./lab/TealoSelectLab";
import TealoSonnerLab from "./lab/TealoSonnerLab";
import TealoSwitchLab from "./lab/TealoSwitchLab";
import TealoTabsLab from "./lab/TealoTabsLab";
import TealoTextareaLab from "./lab/TealoTextareaLab";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
      <TextPreview />
      <TealoButtonLab />
      <TealoCheckboxLab />
      <TealoDialogLab />
      <TealoInputLab />
      <TealoLabelLab />
      <TealoSelectLab />
      <TealoSonnerLab />
      <TealoSwitchLab />
      <TealoTabsLab />
      <TealoTextareaLab />
    </div>
  );
}

export default App;
