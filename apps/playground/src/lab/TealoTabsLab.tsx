import { Text } from "@/components/Text";
import {
  TealoTabs,
  TealoTabsList,
  TealoTabsTrigger,
  TealoTabsContent,
} from "@/components/TealoTabs/TealoTabs";

export default function TealoTabsLab() {
  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <Text variant="h1" style={{ marginBottom: 24 }}>
        Tealo Tabs preview
      </Text>

      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <section>
          <Text variant="h3" style={{ marginBottom: 12 }}>
            Default
          </Text>
          <TealoTabs defaultValue="one">
            <TealoTabsList>
              <TealoTabsTrigger value="one">One</TealoTabsTrigger>
              <TealoTabsTrigger value="two">Two</TealoTabsTrigger>
              <TealoTabsTrigger value="three">Three</TealoTabsTrigger>
            </TealoTabsList>
            <TealoTabsContent value="one">
              <Text variant="bodyM">Content for tab one.</Text>
            </TealoTabsContent>
            <TealoTabsContent value="two">
              <Text variant="bodyM">Content for tab two.</Text>
            </TealoTabsContent>
            <TealoTabsContent value="three">
              <Text variant="bodyM">Content for tab three.</Text>
            </TealoTabsContent>
          </TealoTabs>
        </section>

        <section>
          <Text variant="h3" style={{ marginBottom: 12 }}>
            With longer labels (active text teal)
          </Text>
          <TealoTabs defaultValue="account">
            <TealoTabsList>
              <TealoTabsTrigger
                value="account"
                className="data-[state=active]:text-[var(--tealo-teal-800)]"
              >
                Account
              </TealoTabsTrigger>
              <TealoTabsTrigger
                value="password"
                className="data-[state=active]:text-[var(--tealo-teal-800)]"
              >
                Password
              </TealoTabsTrigger>
              <TealoTabsTrigger
                value="notifications"
                className="data-[state=active]:text-[var(--tealo-teal-800)]"
              >
                Notifications
              </TealoTabsTrigger>
            </TealoTabsList>
            <TealoTabsContent value="account">
              <Text variant="bodyM">Account settings and profile.</Text>
            </TealoTabsContent>
            <TealoTabsContent value="password">
              <Text variant="bodyM">Change your password.</Text>
            </TealoTabsContent>
            <TealoTabsContent value="notifications">
              <Text variant="bodyM">Manage notification preferences.</Text>
            </TealoTabsContent>
          </TealoTabs>
        </section>

        <section>
          <Text variant="h3" style={{ marginBottom: 12 }}>
            Disabled trigger
          </Text>
          <TealoTabs defaultValue="a">
            <TealoTabsList>
              <TealoTabsTrigger value="a">Active</TealoTabsTrigger>
              <TealoTabsTrigger value="b" disabled>
                Disabled
              </TealoTabsTrigger>
              <TealoTabsTrigger value="c">Another</TealoTabsTrigger>
            </TealoTabsList>
            <TealoTabsContent value="a">
              <Text variant="bodyM">First tab content.</Text>
            </TealoTabsContent>
            <TealoTabsContent value="b">
              <Text variant="bodyM">Disabled tab content.</Text>
            </TealoTabsContent>
            <TealoTabsContent value="c">
              <Text variant="bodyM">Third tab content.</Text>
            </TealoTabsContent>
          </TealoTabs>
        </section>
      </div>
    </div>
  );
}
