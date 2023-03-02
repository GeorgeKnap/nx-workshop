import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'nx-workshop-hero-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './hero-form.component.html',
  styles: [
    `
      form {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      input {
        border: solid 1px blue;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroFormComponent {
  #fb = inject(FormBuilder);
  form = this.#fb.group<{ firstname: string | null; lastname: string | null }>({
    firstname: null,
    lastname: null,
  });

  onSubmit() {
    console.log(this.form.getRawValue());
  }
}
