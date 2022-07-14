export const createInner = ({
    width = 1760
}) => {
    const inner = document.createElement('div');
          inner.className = [`l_inner-${width}`];

    return inner;
}