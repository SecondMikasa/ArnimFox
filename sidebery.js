#root.root {--nav-btn-margin: 8px;}
#root.root {--toolbar-bg: transparent;}
#root.root {--tabs-margin: 7px;}
#root.root {--tabs-pinned-height: 45px;}
#root.root {--tabs-pinned-width: 55px;}
#root.root {--tabs-height: 37px;}
#root.root {--tabs-inner-gap: 7px;}
#root.root {--nav-btn-width: 37px;}
#root.root {--nav-btn-height: 37px;}
#root.root {--nav-btn-len-margin: 3px;}
#root.root {--general-margin: 4px;}
#root.root {--general-border-radius: 7px;}

.Tab[data-pin="true"] .body {
	border: 1px solid #fafafa80;
	box-shadow: 0px 0px 7px #00000020;
}

.Tab .title {
	background: linear-gradient(90deg, var(--tabs-normal-fg) 70%, #f1f1f100 95%);
	background-clip: text;
	color: transparent;
}

/* OLD STYLES */
#root.root {
  --gg-black: #1c1b22;
  --gg-grey: #2b2a33;
  --gg-white: #fefefe;
  --gg-red: #d10032;
  --s-frame-bg: var(--gg-black) !important;
  --s-toolbar-bg: var(--gg-grey) !important;
  /* --s-frame-fg: var(--gg-white) !important; */
  /* --s-toolbar-fg: var(--gg-white) !important; */
}

/* --- NAV BAR --- */

#nav_bar {
  margin-bottom: -2px;
  display: flex;
  align-items: center;
  padding: 0 6px;
  height: 50px;
}

/* --- PINNED TABS --- */

.PinnedTabsBar {
  padding: 2px var(--tabs-margin) var(--tabs-margin) var(--tabs-margin) !important;
  background: transparent;
}

/* --- TABS --- */

#root.root {
  --tabs-margin: 6px;
  --tabs-height: 35px;
  --tabs-width: 35px;
  --tabs-pinned-height: var(--tabs-height);
  --tabs-pinned-width: var(--tabs-width);
  --tabs-indent: 16px;
}

.Tab .close:hover {
  background: transparent !important;
}

.Tab .close > svg:hover {
  /* Styling the tab close button */
  border-radius: 50px;
  background: #d10032;
  opacity: 100%;
}

.TabsPanel .new-tab-btn {
  height: var(--tabs-height);
}

.TabsPanel .new-tab-btns {
  padding: 0 6px;
}

/* --- IMPROVEMENTS --- */

.TabsPanel {
  margin: 5px 0;
}

.central-box {
  z-index: 1;
  background: var(--gg-black);
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
}

.main-box:after {
  position: absolute;
  z-index: 0;
  top: -5px;
  left: auto;
  right: -5px;
  content: "";
  background: var(--gg-grey);
  height: 10px;
  width: 10px;
}

/* Uncomment if you place your sidebar to the right */
 .main-box:after {
	right: auto;
	left: -5px;
} 

.SearchBar {
  background-color: var(--gg-grey);
}

.SearchBar .clear-btn {
  background: transparent !important;
  opacity: 100%;
}

.SearchBar .clear-btn:before {
  background: transparent !important;
  opacity: 0;
}

.SearchBar .clear-btn svg {
  background: transparent !important;
}

.SearchBar .clear-btn svg:hover {
  border-radius: var(--search-border-radius);
  background: var(--gg-red) !important;
}

.popup {
  margin-top: 50px;
  max-width: 97%;
}
