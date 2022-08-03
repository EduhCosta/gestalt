// @flow strict
import React, { type Node } from 'react';
import { Box, SideNavigation, DeviceTypeProvider, Button } from 'gestalt';

export default function Example(): Node {
  const [showNav, setShowNav] = React.useState(false);

  return showNav ? (
    <DeviceTypeProvider deviceType="phone">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="secondary"
        height={500}
      >
        <Box height={450} width={280} color="default">
          <SideNavigation
            title="Advertisement"
            accessibilityLabel="Mobile device example"
            dismissButton={{
              onDismiss: () => setShowNav(false),
              accessibilityLabel: 'Close navigation',
              tooltip: { accessibilityLabel: 'Close side navigation', text: 'Close navigation' },
            }}
          >
            <SideNavigation.TopItem
              href="#"
              onClick={({ event }) => event.preventDefault()}
              label="Reporting"
              icon="ads-stats"
            />
            <SideNavigation.TopItem
              href="#"
              onClick={({ event }) => event.preventDefault()}
              label="Conversions"
              icon="replace"
            />
            <SideNavigation.Section label="Audiences">
              <SideNavigation.TopItem
                href="#"
                onClick={({ event }) => event.preventDefault()}
                label="Thanksgiving"
                icon="people"
              />
              <SideNavigation.Group label="Christmas" icon="people">
                <SideNavigation.NestedItem
                  href="#"
                  onClick={({ event }) => event.preventDefault()}
                  label="Luxury Christmas"
                />
                <SideNavigation.NestedGroup label="Classic Christmas">
                  <SideNavigation.NestedItem
                    href="#"
                    onClick={({ event }) => event.preventDefault()}
                    label="West Coast"
                  />
                  <SideNavigation.NestedItem
                    href="#"
                    onClick={({ event }) => event.preventDefault()}
                    label="East Coast"
                  />
                </SideNavigation.NestedGroup>
                <SideNavigation.NestedGroup label="Alternative Christmas">
                  <SideNavigation.NestedItem
                    href="#"
                    onClick={({ event }) => event.preventDefault()}
                    label="West Coast"
                  />
                  <SideNavigation.NestedItem
                    href="#"
                    onClick={({ event }) => event.preventDefault()}
                    label="East Coast"
                  />
                </SideNavigation.NestedGroup>
              </SideNavigation.Group>
              <SideNavigation.Group label="Halloween" icon="people" display="static">
                <SideNavigation.NestedItem
                  href="#"
                  onClick={({ event }) => event.preventDefault()}
                  label="East Coast"
                />
                <SideNavigation.NestedItem
                  href="#"
                  onClick={({ event }) => event.preventDefault()}
                  label="West Coast"
                />
              </SideNavigation.Group>
            </SideNavigation.Section>
          </SideNavigation>
        </Box>
      </Box>
    </DeviceTypeProvider>
  ) : (
    <Button
      accessibilityLabel="Show navigation"
      color="red"
      text="Show navigation"
      size="lg"
      onClick={() => setShowNav(true)}
    />
  );
}
