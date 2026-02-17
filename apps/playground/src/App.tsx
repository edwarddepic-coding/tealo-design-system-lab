import { useEffect } from "react";
import { TextPreview } from "./components/Text/Text.preview";
import TealoButtonLab from "./lab/TealoButtonLab";
import TealoCardLab from "./lab/TealoCardLab";
import TealoCheckboxLab from "./lab/TealoCheckboxLab";
import TealoDialogLab from "./lab/TealoDialogLab";
import TealoDrawerLab from "./lab/TealoDrawerLab";
import TealoDropdownMenuLab from "./lab/TealoDropdownMenuLab";
import TealoInputLab from "./lab/TealoInputLab";
import TealoLabelLab from "./lab/TealoLabelLab";
import TealoSelectLab from "./lab/TealoSelectLab";
import TealoSeparatorLab from "./lab/TealoSeparatorLab";
import TealoSheetLab from "./lab/TealoSheetLab";
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
      <TealoCardLab />
      <TealoCheckboxLab />
      <TealoDialogLab />
      <TealoDrawerLab />
      <TealoDropdownMenuLab />
      <TealoInputLab />
      <TealoLabelLab />
      <TealoSelectLab />
      <TealoSeparatorLab />
      <TealoSheetLab />
      <TealoSonnerLab />
      <TealoSwitchLab />
      <TealoTabsLab />
      <TealoTextareaLab />
    </div>
  );
}

export default App;
