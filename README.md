# Notes plugin for marker.js Live

This plugin displays marker notes in the target element.

## Installation

Make sure you have [marker.js Live] installed. Then run

```
npm install mjslive-plugin-notes
```

or 

```
yarn add mjslive-plugin-notes
```

## Usage

To add the functionality to marker.js Live instance simply pass a new instance of `Notes` to its `addPlugins()` method.

```
import { Notes } from 'mjslive-plugin-notes';

...
markerView.addPlugin(new Notes());

markerView1.show(markerViewState);

```

## Configuration

Notes plugin object has the following properties:

- `target` - Target HTML element for the note content.
- `defaultNote` - Note to return when not over a marker or note is not set. (empty string by default)
- `useInnerHTML` - By default the note is assigned to `innerText` of the `target`. If this property is set to `true` the note will be assigned to `innerHTML` instead.
- `notesParser` - Function to be called to parse each note (`(notes: string) => string`)


This example sets the default note text, uppercases all notes, and sets the result to be
the innerText of a target div.

```
import { Notes } from 'mjslive-plugin-notes';

...
const notes = new Notes();
notes.target = document.getElementById('notesBlock');
notes.defaultNote = 'testing, testing...';
notes.notesParser = (note) => { return note.toUpperCase() };
markerView.addPlugin(notes);

```

## License

This [marker.js Live] plugin is distributed under the MIT License. See LICENSE file for details.

[marker.js Live]: https://markerjs.com/products/markerjs-live