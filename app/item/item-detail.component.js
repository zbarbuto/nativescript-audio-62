"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_audio_1 = require("nativescript-audio");
var item_service_1 = require("./item.service");
var ItemDetailComponent = (function () {
    function ItemDetailComponent(itemService, route) {
        this.itemService = itemService;
        this.route = route;
    }
    ItemDetailComponent.prototype.play = function () {
        var player = new nativescript_audio_1.TNSPlayer();
        player.initFromUrl({
            audioFile: 'http://www.noiseaddicts.com/samples_1w72b820/2514.mp3',
            loop: false
        });
        player.play();
    };
    ItemDetailComponent = __decorate([
        core_1.Component({
            selector: 'ns-details',
            moduleId: __filename,
            templateUrl: './item-detail.component.html'
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService,
            router_1.ActivatedRoute])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCx5REFBK0M7QUFHL0MsK0NBQTZDO0FBTzdDO0lBR0UsNkJBQ1UsV0FBd0IsRUFDeEIsS0FBcUI7UUFEckIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDNUIsQ0FBQztJQUVKLGtDQUFJLEdBQUo7UUFDRSxJQUFNLE1BQU0sR0FBRyxJQUFJLDhCQUFTLEVBQUUsQ0FBQztRQUMvQixNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ2pCLFNBQVMsRUFBRSx1REFBdUQ7WUFDbEUsSUFBSSxFQUFFLEtBQUs7U0FDWixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQWZVLG1CQUFtQjtRQUwvQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLDhCQUE4QjtTQUM1QyxDQUFDO3lDQUt1QiwwQkFBVztZQUNqQix1QkFBYztPQUxwQixtQkFBbUIsQ0FnQi9CO0lBQUQsMEJBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVE5TUGxheWVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWF1ZGlvJztcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4vaXRlbSc7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gJy4vaXRlbS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtZGV0YWlscycsXG4gIG1vZHVsZUlkOiBfX2ZpbGVuYW1lLFxuICB0ZW1wbGF0ZVVybDogJy4vaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1EZXRhaWxDb21wb25lbnQge1xuICBpdGVtOiBJdGVtO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICkge31cblxuICBwbGF5KCkge1xuICAgIGNvbnN0IHBsYXllciA9IG5ldyBUTlNQbGF5ZXIoKTtcbiAgICBwbGF5ZXIuaW5pdEZyb21Vcmwoe1xuICAgICAgYXVkaW9GaWxlOiAnaHR0cDovL3d3dy5ub2lzZWFkZGljdHMuY29tL3NhbXBsZXNfMXc3MmI4MjAvMjUxNC5tcDMnLFxuICAgICAgbG9vcDogZmFsc2VcbiAgICB9KTtcbiAgICBwbGF5ZXIucGxheSgpO1xuICB9XG59XG4iXX0=