import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-route-component',
  imports: [],
  templateUrl: './product-route-component.html',
  styleUrl: './product-route-component.scss',
})
export class ProductRouteComponent implements OnInit {
  // display single product info
  private ar = inject(ActivatedRoute);

  ngOnInit(): void {
    // retrieve info form current route
    // active subcription
    this.ar.params.subscribe((params) => {
      console.log('current params', params['id'], params['userId']);
    });
    // active subcription
    this.ar.paramMap.subscribe((params) => {
      console.log(
        'using paramMap',
        params.get('id'),
        params.get('userId'),
        this.ar.snapshot.queryParams['sort'],
      );
    });
    // snapshot - one time
    console.log('using snapshot', this.ar.snapshot.params['id']);

    // retreieve query parameters
    this.ar.queryParamMap.subscribe((query) => {
      console.log(query.get('sort'), query.get('page'));
    });
  }
}
