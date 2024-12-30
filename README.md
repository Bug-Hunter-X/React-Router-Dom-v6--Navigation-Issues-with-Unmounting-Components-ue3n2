# React Router Dom v6 Navigation Bug

This repository demonstrates a bug in React Router Dom v6 related to navigation within components that are unmounting. The issue arises when using imperative navigation methods like `useNavigate()` within a component that is being unmounted or is about to unmount.  This often leads to errors or unexpected behavior.

## Bug Description

The bug manifests as inconsistent or erroneous navigation when using `useNavigate()` within a component's lifecycle methods (e.g., `componentWillUnmount`) or after the component has been unmounted.  The exact nature of the issue can vary depending on the specifics of the application and the navigation action.

## Solution

The provided solution addresses this bug by canceling the navigation if the component is unmounting.  A flag and useEffect hook are used to track the component's mounted status and prevent navigation when unmounting.  This ensures that the navigation action is only executed while the component is active and mounted in the DOM.