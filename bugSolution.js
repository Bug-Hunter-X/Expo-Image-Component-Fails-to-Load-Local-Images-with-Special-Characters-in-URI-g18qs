The issue is likely due to how Expo handles URIs internally.  A workaround is to encode the URI components before passing them to the `Image` component.  This solution uses `encodeURIComponent` to encode the URI.

```javascript
import * as React from 'react';
import { Image } from 'expo-image';

const MyComponent = () => {
  const imagePath = 'path/to/my (image).jpg';
  const encodedImagePath = encodeURIComponent(imagePath);

  return (
    <Image source={{ uri: encodedImagePath }} style={{ width: 200, height: 200 }} />
  );
};

export default MyComponent;
```