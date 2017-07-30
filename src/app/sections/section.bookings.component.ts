import { Component } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './section.bookings.component.html'
})

export class SectionBookingsComponent {
  public demoList: any = [
    {
      nameId: 'demo_live',
      demoId: '5',
      isActive: 'active in',
    },
    {
      nameId: 'demo_dance',
      demoId: '2',
      isActive: '',
    },
    {
      nameId: 'demo_latin',
      demoId: '6',
      isActive: '',
    },
    {
      nameId: 'demo_smooth',
      demoId: '3',
      isActive: '',
    },
    {
      nameId: 'demo_classic',
      demoId: '1',
      isActive: '',
    },
    {
      nameId: 'demo_wedding',
      demoId: '4',
      isActive: '',
    },
  ];
}
