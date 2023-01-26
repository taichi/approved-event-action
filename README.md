Use [Reviewing deployments](https://docs.github.com/en/actions/managing-workflow-runs/reviewing-deployments), an official GitHub feature.

# approved-event-action

This action provide Pseudo Appeoved Event.

## Inputs

### `approvals`

**Optional** The number of unique approvals. Default `1`.

## Outputs

### `approved`

Pull Request is approved or not. if approved, value is `true`;

## Example usage

    on: pull_request_review
    name: Example Job
    jobs:
      myJob:
        runs-on: ubuntu-latest
        steps:
        - uses: taichi/approved-event-action@v1.2.1
          id: approved
          with:
            approvals: '2'
          env:
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        - run: echo "Approved !!"
          if: steps.approved.outputs.approved == 'true'
