import {Component, OnInit, ElementRef} from "@angular/core";
import {ROUTES} from "../sidebar/sidebar.component";
import {Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';

import {
    Location,
    LocationStrategy,
    PathLocationStrategy
} from "@angular/common";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
    public listTitles: any[];
    public location: Location;
    sidenavOpen: boolean = true;

    constructor(
        location: Location,
        private element: ElementRef,
        private router: Router
    ) {
        this.location = location;
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                // Show loading indicator

            }
            if (event instanceof NavigationEnd) {
                // Hide loading indicator

                if (window.innerWidth < 1200) {
                    document.body.classList.remove("g-sidenav-pinned");
                    document.body.classList.add("g-sidenav-hidden");
                    this.sidenavOpen = false;
                }
            }

            if (event instanceof NavigationError) {
                // Hide loading indicator

                // Present error to user
                console.log(event.error);
            }
        });

    }

    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle);
    }

    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === "#") {
            titlee = titlee.slice(1);
        }

        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return "Dashboard";
    }



    openSidebar() {
        if (document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.remove("g-sidenav-pinned");
            document.body.classList.add("g-sidenav-hidden");
            this.sidenavOpen = false;
        } else {
            document.body.classList.add("g-sidenav-pinned");
            document.body.classList.remove("g-sidenav-hidden");
            this.sidenavOpen = true;
        }
    }

    toggleSidenav() {
        if (document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.remove("g-sidenav-pinned");
            document.body.classList.add("g-sidenav-hidden");
            this.sidenavOpen = false;
        } else {
            document.body.classList.add("g-sidenav-pinned");
            document.body.classList.remove("g-sidenav-hidden");
            this.sidenavOpen = true;
        }
    }
}