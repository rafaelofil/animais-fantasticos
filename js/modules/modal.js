export default class Modal {
  constructor(buttonOpen, buttonClose, containerModal) {
    this.buttonOpen = document.querySelector(buttonOpen);
    this.buttonClose = document.querySelector(buttonClose);
    this.containerModal = document.querySelector(containerModal);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutModal = this.clickOutModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle('active');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickOutModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  addModalEvents() {
    this.buttonOpen.addEventListener('click', this.eventToggleModal);
    this.buttonClose.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clickOutModal);
  }

  init() {
    this.addModalEvents();
    return this;
  }
}
