function showSideBar (): void {
    const sideBar = document.querySelector('.sidebar') as HTMLElement;
    sideBar.style.display = 'flex';
}
function hideSideBar (): void {
    const sideBar = document.querySelector('.sidebar') as HTMLElement;
    sideBar.style.display = 'none';
}