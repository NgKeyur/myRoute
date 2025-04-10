import { Component } from '@angular/core';
import { Trip } from '../trip.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-track-my-route',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './track-my-route.component.html',
  styleUrl: './track-my-route.component.scss',
})
export class TrackMyRouteComponent {
  from = '';
  to = '';
  segments: Trip[] = [];

  addSegment() {
    const newFrom = this.from.trim().toUpperCase().substring(0, 3);
    const newTo = this.to.trim().toUpperCase().substring(0, 3);

    if (!newFrom || !newTo) return;

    let type: Trip['type'] = 'continued';
    const last = this.segments[this.segments.length - 1];

    const isRepeated = this.segments.some(
      (s) => s.from === newFrom && s.to === newTo
    );
    if (isRepeated) {
      type = 'repeated';
    } else if (!last || last.to === newFrom) {
      type = 'continued';
    } else {
      type = 'non-continued';
    }

    this.segments.push({ from: newFrom, to: newTo, type });
    this.from = '';
    this.to = '';
  }
}
