import {Component, OnInit} from '@angular/core';
import {Donut} from "../../models/donut.model";
import {DonutService} from "../../service/donut.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-donut-single',
  templateUrl: 'donut-single.component.html',
  styleUrls: ['donut-single.component.css']
})
export class DonutSingleComponent implements OnInit {
  public donut!: Donut;
  public isEdit!: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private donutService: DonutService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.donutService.readOne(id).subscribe((donut: Donut) => (this.donut = donut));
    this.isEdit = this.route.snapshot.data['isEdit'];
  }

  public onCreate(donut: Donut) {
    this.donutService.create(donut).subscribe((donut) => this.router.navigate(['admin', 'donuts', donut.id]) );
  }

  public onUpdate(donut: Donut) {
    this.donutService.update(donut).subscribe({
      next:() =>this.router.navigate(['admin']),
      error:(err) => console.log(err.message)
    });
  }

  public onDelete(donut: Donut) {
    this.donutService.delete(donut).subscribe(() => console.log("FatalityReversed"));
  }
}
