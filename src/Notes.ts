import {
  MarkerView,
  IMarkerViewPlugin,
  MarkerEventHandler,
} from 'markerjs-live';

export class Notes implements IMarkerViewPlugin {
  private markerView: MarkerView;

  /**
   * Note to return when not over a marker or note is not set.
   *
   * @default '' (empty string)
   */
  public defaultNote = '';
  /**
   * By default the note is assigned to `innerText` of the {@linkcode target}.
   * If this property is set to `true` the note will be assigned to `innerHTML` instead.
   */
  public useInnerHTML = false;
  /**
   * Function to be called to parse each note.
   */
  public notesParser: (notes: string) => string;
  /**
   * Target element for the note content.
   */
  public target: HTMLElement;

  public init(markerView: MarkerView): void {
    this.markerView = markerView;

    this.markerView.addEventListener('over', this.markerOver);
  }

  private markerOver: MarkerEventHandler = (markerView, marker) => {
    if (markerView) {
      let processedNotes = marker && marker.notes ? marker.notes : this.defaultNote;
      if (this.notesParser) {
        processedNotes = this.notesParser(processedNotes);
      }
      if (this.target) {
        if (this.useInnerHTML) {
          this.target.innerHTML = processedNotes;
        } else {
          this.target.innerText = processedNotes;
        }
      }
    }
  };
}
