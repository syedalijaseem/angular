import { Component, inject, OnInit, signal } from '@angular/core';
import { JobService } from './Services/job-service';
import { Job } from './Models/job.model';

@Component({
  selector: 'app-job-board',
  imports: [],
  templateUrl: './job-board.html',
  styleUrl: './job-board.scss',
})
export class JobBoard implements OnInit {
  private jobService = inject(JobService);

  private readonly jobIds = signal<number[]>([]);
  public jobs = signal<Job[]>([]);
  private currentIndex = signal(0);

  ngOnInit(): void {
    this.jobService.getJobIds().subscribe((ids) => {
      console.log(ids);
      this.jobIds.set(ids);
      console.log(this.jobIds());
    });
  }
}
