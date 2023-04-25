import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Donut} from "../../models/donut.model";

@Component({
  selector: 'app-donut-form',
  templateUrl: './donut-form.component.html',
  styleUrls: ['./donut-form.component.less']
})
export class DonutFormComponent implements OnInit {

  @Input()
  public donut!:Donut;

  @Input()
  public isEdit!:boolean;

  @Output()
  public create =new EventEmitter<Donut>();

  @Output()
  public update =new EventEmitter<Donut>();

  @Output()
  public delete =new EventEmitter<Donut>();


  public icons: string[] = [
    'caramel-swirl',
    'just-chocolate',
    'glazed-fudge',
    'sour-supreme',
    'zesty-lemon',
    'strawberry-glaze',
    'vanilla-sundae'
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  handleCreate(form: NgForm) {
    if(form.valid){
      this.create.emit(form.value);
    }
    else {
      form.form.markAllAsTouched();
    }
  }

  handleUpdate(form: NgForm) {
    if(form.valid){
      this.update.emit({id:this.donut.id, ...form.value});
    }
    else {
      form.form.markAllAsTouched();
    }

  }

  public handleDelete() {
    if(confirm(`Really want to delete this ${this.donut.name}`))
      this.delete.emit({...this.donut});
  }
}
