import {ViewEncapsulation} from '@angular/core';

import {unimplemented} from '../src/facade/exceptions';
import {assertionsEnabled} from '../src/facade/lang';

import {CompileIdentifierMetadata} from './compile_metadata';
import {Identifiers} from './identifiers';

export class CompilerConfig {
  public renderTypes: RenderTypes;
  public defaultEncapsulation: ViewEncapsulation;
  public genDebugInfo: boolean;
  public logBindingUpdate: boolean;
  public useJit: boolean;
  public platformDirectives: any[];
  public platformPipes: any[];

  constructor(
      {renderTypes = new DefaultRenderTypes(), defaultEncapsulation = ViewEncapsulation.Emulated,
       genDebugInfo = assertionsEnabled(), logBindingUpdate = assertionsEnabled(), useJit = true,
       platformDirectives = [], platformPipes = []}: {
        renderTypes?: RenderTypes,
        defaultEncapsulation?: ViewEncapsulation,
        genDebugInfo?: boolean,
        logBindingUpdate?: boolean,
        useJit?: boolean,
        platformDirectives?: any[],
        platformPipes?: any[]
      } = {}) {
    this.renderTypes = renderTypes;
    this.defaultEncapsulation = defaultEncapsulation;
    this.genDebugInfo = genDebugInfo;
    this.logBindingUpdate = logBindingUpdate;
    this.useJit = useJit;
    this.platformDirectives = platformDirectives;
    this.platformPipes = platformPipes;
  }
}

/**
 * Types used for the renderer.
 * Can be replaced to specialize the generated output to a specific renderer
 * to help tree shaking.
 */
export abstract class RenderTypes {
  get renderer(): CompileIdentifierMetadata { return unimplemented(); }
  get renderText(): CompileIdentifierMetadata { return unimplemented(); }
  get renderElement(): CompileIdentifierMetadata { return unimplemented(); }
  get renderComment(): CompileIdentifierMetadata { return unimplemented(); }
  get renderNode(): CompileIdentifierMetadata { return unimplemented(); }
  get renderEvent(): CompileIdentifierMetadata { return unimplemented(); }
}

export class DefaultRenderTypes implements RenderTypes {
  renderer = Identifiers.Renderer;
  renderText: any /** TODO #9100 */ = null;
  renderElement: any /** TODO #9100 */ = null;
  renderComment: any /** TODO #9100 */ = null;
  renderNode: any /** TODO #9100 */ = null;
  renderEvent: any /** TODO #9100 */ = null;
}
