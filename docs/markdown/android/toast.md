---
title: Toast
description: Toasts are brief and small messages that overlay content, but do not block the user’s flow, as they are out of the way and ephemeral. Toasts do not require user action and primarily acknowledge that a user has performed an action or completed a task.
fullwidth: true
---

<ImgContainer src="https://i.pinimg.com/originals/db/49/55/db4955bf701fc8d8b02df5db1b629553.jpg" noPadding alt="an example of toast"/>

## Usage guidelines

<TwoCol>
  <Group>
    <Do title="When to use" />    
    - Briefly acknowledging a user action without interrupting their flow.
    - When acknowledging an action that relates to another surface, provide a link that navigates the user to that surface.
    - To undo actions after acknowledgement, if there isn’t already a way to do so on the current surface.
    - For system processes like showing that a process is loading, or when there are internet connectivity issues.
  </Group>
  <Group>
  <Dont title="When not to use" />
  - When, due to an error, a user can’t even continue performing basic tasks like browsing already loaded Pins.
  - When asking a user to confirm that they want to perform an action. Use [Sheet](/android/sheet) instead.
  - When you want to suggest a user spend more money or try new features; use [Upsell](/web/upsell) instead.
  - For errors that relate to a specific section or page. Use [Callout](/web/callout) or [SlimBanner](/web/slimbanner) instead.
  - To guide or educate the user. Use [Popover](/web/popover) or [Tooltip](/web/tooltip) instead.
  </Group>
</TwoCol>

## Best practices
<TwoCol>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/ee/8b/93/ee8b939bf9ca14c16dc949732a8b5bc5.jpg" alt="example with toast with unblocking placement"/>
    <Do title="Do" />
    Place Toasts out of the way so that a user can still navigate and complete tasks. Keep a top or bottom margin that is the same size as the left and right margins.
  </Group>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/6f/68/22/6f68224ffbbee9c9a2e9b020a94b97f0.jpg" alt="example of with blocking placement"/>
    <Dont title="Don't" />
    Block navigation controls with Toasts or align too close to the edge of a navigation bar.
  </Group>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/81/c4/2b/81c42b2997a7b892e689c929623744bb.jpg" alt="example of showing one toast"/>
    <Do title="Do" />
    Show one Toast at a time, with errors and acknowledgements taking priority.
  </Group>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/4c/0d/2c/4c0d2ce89a670ebb71d80885179898c8.jpg" alt="example of showing multiple toasts"/>
    <Dont title="Don't" />
    Stack multiple toasts as that will block the user.
  </Group>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/ee/2d/1a/ee2d1acda7fb690b4a6de04ae2fc3d23.jpg" alt="example of a dismissible toast"/>
    <Do title="Do" />
    Include a way to dismiss the toast when it is actionable or contains multiple lines of text. Mobile toasts can be dismissed via swiping up if placed on the top or down if placed on the bottom.
  </Group>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/46/66/2c/46662cf86e721af0d755f27100b05771.jpg" alt="example of leaving a toast on screen"/>
    <Dont title="Don't" />
    Leave toasts on screen for a long time without a way to dismiss. Exceptions are blocking error toasts where a user can’t take any action until the error is resolved.
  </Group>
</TwoCol>

## Accessibility

People use Android’s accessibility features, such as TalkBack and dynamic text sizing to personalize how they interact with their devices. Supporting these personalizations ensures that everyone has a great user experience. See Material Design and development documentation about accessibility for Android:

[Accessbile design on Android](https://material.io/design/usability/accessibility.html#understanding-accessibility)
[Accessible development on Android](https://developer.android.com/guide/topics/ui/accessibility)

### Duration
Some people may take longer to read toasts than others due to low vision or cognitive impairments. Use the guide below to set duration for Toasts:

- Brief text of approximately 10–15 words (including button text): 5 seconds
- Longer than 15 words: Slow readers can read about 125–200 words per minute. Base your duration on the slowest number. For example, a toast with 20 words should be set to 10s. [Source](https://capitalizemytitle.com/reading-time/3000-words/)

## Variants

### Type

<TwoCol>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/ed/6c/59/ed6c59cc39e64ae6244cf1a3a4158d44.jpg" noPadding alt="default toast"/>
    
    **Default**
    A generic acknowledgment after an action is taken.
  </Group>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/04/6f/e8/046fe8c42fbf51d4065515f793865205.jpg" noPadding alt="error toast"/>
   
    **Error**
    Used rarely for connection issues or unknown errors where we don’t want to completely block the users flow, but want the message to persist if the user goes to another surface. Providing a way to solve the error or get help is recommended.
  </Group>
  
</TwoCol>

### Images & graphics

<TwoCol>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/ed/6c/59/ed6c59cc39e64ae6244cf1a3a4158d44.jpg" noPadding alt="text only toast"/>
    
    **Text only**
    A simple, generic acknowledgment after an action is taken. These should not be actionable.
  </Group>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/31/44/83/31448327246692115b4eb3546a2a26f4.jpg" noPadding alt="toast with image"/>
    
    **Image**
    With an image for Pin or Board actions.
  </Group>
</TwoCol>
<TwoCol>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/7b/03/89/7b038920b2ff477c2b60935dccb87fbc.jpg" noPadding alt="toast with avatar"/>
    
    **Avatar**
    With an Avatar for Profile or Pinner-related messaging. An optional link can be included. When there’s a link on mWeb, the entire toast is tappable, using TapArea.
  </Group>
  <Group>

  </Group>
</TwoCol>

### Navigation

<TwoCol>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/79/dd/04/79dd04506e8e3f17b4ecae1398ab2720.jpg" noPadding alt="toast with button"/>
    
    **Button**
    As a secondary element, to drive users to another surface, or change a recently completed action.
  </Group>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/31/44/83/31448327246692115b4eb3546a2a26f4.jpg" noPadding alt="toast with link"/>
    
    **Link**
    As a secondary element, to drive users to another surface.
  </Group>
</TwoCol>

### Placement

Placement is always centered at the top or bottom of the screen and not blocking any navigation or important buttons.

## Writing

<TwoCol>
  <Group>
    <Do title="Do" />      
  - Consider internationalization and how other languages may be take up more space
  - Be brief and concise
  - Use conversational language
  </Group>
  <Group>
  <Dont title="Don't" />
  - Use lengthy, technical jargon or local idioms that will be hard to translate to other languages
  </Group>
</TwoCol>
