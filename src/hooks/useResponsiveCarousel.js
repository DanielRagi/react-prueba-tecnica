const useResponsiveCarousel = {
    1: {
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    2: {
        breakpoint: { max: 3000, min: 1840 },
        items: 6
    },
    3: {
        breakpoint: { max: 1840, min: 1570 },
        items: 5
    },
    4: {
        breakpoint: { max: 1570, min: 1320 },
        items: 4
    },
    5: {
        breakpoint: { max: 1320, min: 1050 },
        items: 3
    },
    6: {
        breakpoint: { max: 1050, min: 800 },
        items: 2
    },
    7: {
        breakpoint: { max: 800, min: 728 },
        items: 3
    },
    8: {
        breakpoint: { max: 728, min: 480 },
        items: 2
    },
    9: {
        breakpoint: { max: 480, min: 0 },
        items: 1
    }
};

export default useResponsiveCarousel;