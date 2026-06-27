/**
 * Core types for the AngularJS static analysis symbol table.
 *
 * These types model the cross-file references we extract from JS controllers
 * and HTML templates. The LSP server builds an instance of `SymbolTable` on
 * workspace initialization and updates it incrementally on file changes.
 */

/** Unique key identifying a location in the workspace. */
export interface SourceLocation {
  uri: string;
  line: number; // 0-based
  column: number; // 0-based
}

/** A single scope member — a property or function on $scope. */
export interface ScopeMemberSymbol {
  name: string;
  kind: "function" | "variable" | "object";
  controllerName: string;
  moduleName: string;
  location: SourceLocation;
  /** Inferred type from the RHS of the assignment (e.g. "string", "Array"). */
  type: string;
  /** For functions: inferred return type. null if cannot be inferred. */
  returnType: string | null;
}

/** A service or value injected into a controller via the inline array. */
export interface InjectedService {
  /** The parameter name (e.g. "DataService", "$http"). */
  name: string;
  /** True if this is a built-in Angular service (skipped from navigation). */
  isBuiltIn: boolean;
  /** The index in the injection array (0-based). */
  index: number;
  location: SourceLocation;
}

/** A registered AngularJS component (controller, directive, service, etc.). */
export interface AngularComponent {
  kind: "controller" | "service" | "factory" | "directive" | "component";
  name: string;
  moduleName: string;
  location: SourceLocation;
  /** If this component has a controller, its scope members. */
  scopeMembers: ScopeMemberSymbol[];
  /** If a directive/component, the resolved template URI (if any). */
  templateUri: string | null;
  /** For controllers: the services injected via the inline array. */
  injections: InjectedService[];
}

/** A parsed AngularJS module declaration. */
export interface AngularModule {
  name: string;
  location: SourceLocation;
  components: AngularComponent[];
}

/**
 * A template expression extracted from an HTML file.
 *
 * Represents a single Angular expression like `{{ foo }}` or `ng-click="bar()"`.
 */
export interface TemplateExpression {
  expression: string;
  location: SourceLocation;
  /** Identifiers referenced by this expression (tokenized). */
  references: string[];
  /** The controller name this expression resolves against (if determinable). */
  resolvedController: string | null;
}

/**
 * A processed HTML template with its controller context and expressions.
 */
export interface TemplateFile {
  uri: string;
  /** Direct `ng-controller` binding or nearest ancestor's controller. */
  controllerName: string | null;
  /** Alias from `controller as alias` (not used in $scope style, but tracked). */
  alias: string | null;
  expressions: TemplateExpression[];
}

/**
 * Full cross-file symbol table built by the scanner + analyzer.
 */
export interface SymbolTable {
  modules: Map<string, AngularModule>;
  components: Map<string, AngularComponent>;     // key = "controller:Name" etc.
  templates: Map<string, TemplateFile>;           // key = URI
  /** Index: scope member name → list of defining components. */
  memberIndex: Map<string, ScopeMemberSymbol[]>;
  /** Index: scope member name → list of template expression locations. */
  referenceIndex: Map<string, SourceLocation[]>;
  /** Index: injection service name → list of InjectedService locations. */
  injectionIndex: Map<string, InjectedService[]>;
}
