import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
export interface Lab {
  nome: string;
}
@Component({
  selector: "app-laboratorios",
  templateUrl: "./laboratorios.component.html",
  styleUrls: ["./laboratorios.component.css"]
})
export class LaboratoriosComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: "LAMI 1" },
          { title: "LAMI 2" },
          { title: "LAMI 3" },
          { title: "LAMI 4" }
        ];
      }

      return [
        { title: "LAMI 1" },
        { title: "LAMI 2" },
        { title: "LAMI 3" },
        { title: "LAMI 4" },
        { title: "LAMI 5" },
        { title: "LAMI 6" },
        { title: "LAMI 7" },
        { title: "LAMI 8" }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
