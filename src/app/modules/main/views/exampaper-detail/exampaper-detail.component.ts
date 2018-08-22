import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { ExampaperService } from '../../snippets/services/exampaper.service';

@Component({
  selector: 'app-exampaper-detail',
  templateUrl: './exampaper-detail.component.html',
  styleUrls: ['./exampaper-detail.component.less']
})
export class ExampaperDetailComponent implements OnInit {

  exampaper: any;
  id: number;
  constructor(
    private exampaperService: ExampaperService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.id = queryParams.id;
    });
    console.log(this.id);
    this.exampaperService.getExampaper(this.id).subscribe(val => {
      this.exampaper = val.data;
    });
  }

}
