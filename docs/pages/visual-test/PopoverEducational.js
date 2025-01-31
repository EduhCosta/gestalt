// @flow strict
import { useState, useRef, type Node } from 'react';
import { ColorSchemeProvider, PopoverEducational, Flex, Box, IconButton } from 'gestalt';

export default function Snapshot(): Node {
  const anchorRef = useRef();
  const [open, setOpen] = useState(false);

  return (
    <ColorSchemeProvider colorScheme="light">
      <Box color="default" display="inlineBlock" padding={1} width={300} height={200}>
        <Flex width="100%" justifyContent="center">
          <IconButton
            accessibilityLabel="test"
            iconColor="darkGray"
            icon="filter"
            onClick={() => setOpen(true)}
            ref={anchorRef}
            size="lg"
          />
        </Flex>
        {open && (
          <PopoverEducational
            accessibilityLabel="Popover"
            anchor={anchorRef.current}
            onDismiss={() => {}}
            message="Message"
            primaryAction={{ text: 'Next' }}
          />
        )}
      </Box>
    </ColorSchemeProvider>
  );
}
