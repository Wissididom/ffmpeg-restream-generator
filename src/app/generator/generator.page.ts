import { Component } from '@angular/core';

@Component({
    selector: 'app-generator',
    templateUrl: 'generator.page.html',
    styleUrls: ['generator.page.scss'],
    standalone: false
})
export class GeneratorPage {
  public inputStream: string = 'rtmp://localhost:1935/live/app';
  public streamTargets: {
    id: number;
    formatEnabled: boolean;
    format: string;
    hlsTime: number;
    hlsPlaylistType: string;
    outputStream: string;
  }[] = [];
  public command: string = '';

  constructor() {}

  newOutputStream() {
    let nextId =
      this.streamTargets.length == 0
        ? 0
        : this.streamTargets[this.streamTargets.length - 1].id + 1;
    this.streamTargets.push({
      id: nextId,
      formatEnabled: false,
      format: 'flv',
      hlsTime: 6,
      hlsPlaylistType: 'event',
      outputStream: '',
    });
  }

  generateCommand() {
    let result = 'ffmpeg -listen 1 -i "' + this.inputStream + '"';
    for (let streamTarget of this.streamTargets) {
      result += ' -f ' + streamTarget.format;
      if (streamTarget.format.toLowerCase() == 'hls') {
        result += ' -hls_time ' + streamTarget.hlsTime;
        result += ' -hls_playlist_type ' + streamTarget.hlsPlaylistType;
      }
      result += ' "' + streamTarget.outputStream + '"';
    }
    this.command = result;
  }

  deleteOutputStream(index: number) {
    this.streamTargets.splice(index, 1);
    for (let i = 0; i < this.streamTargets.length; i++) {
      this.streamTargets[i].id = i;
    }
  }
}
